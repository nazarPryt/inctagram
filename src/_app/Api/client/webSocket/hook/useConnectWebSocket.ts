import {useEffect} from 'react'

import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {notificationSocketResponseSchema} from '@/_app/Api/client/webSocket/helpers/NotifcationWS.schema'
import {appSettings} from '@/_app/AppSettings'
import {MessageSchema} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {getNotificationsApi} from '@/entities/Notifications/api/getNotifications.api'
import {NotificationType} from '@/entities/Notifications/helpers/notifications.schema'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {useAuth} from '@/shared/hooks/useAuth'
import {getCookie} from 'cookies-next'

import {SocketEvents} from '../helpers/socketEvents'

// const socketActions = {
//     [SocketEvents.notifications]: (response: any, dispatch: any) => {
//         //logic here
//     },
// }

export const useConnectWebSocket = () => {
    const accessToken = getCookie(appSettings.constants.accessToken)
    const {isLoggedIn} = useAuth()
    const dispatch = useAppDispatch()

    const connectWS = () => {
        if (!accessToken) {
            return
        }
        WebSocketApi.createConnection(accessToken)
        WebSocketApi.socket?.on(SocketEvents.notifications, response => {
            // socketActions[SocketEvents.notifications](response, dispatch)
            console.log(SocketEvents.notifications, response)
            const res = notificationSocketResponseSchema.parse(response)
            const newMessage: NotificationType = {
                id: res.id,
                isRead: res.isRead,
                message: res.message,
                notifyAt: res.notifyAt,
            }

            dispatch(
                getNotificationsApi.util.updateQueryData('getNotifications', 0, oldData => {
                    oldData.items.unshift(newMessage)
                })
            )
        })
        WebSocketApi.socket?.on(SocketEvents.UPDATE_MESSAGE, response => {
            console.log('SocketEvents.UPDATE_MESSAGE', response)
        })
        WebSocketApi.socket?.on(SocketEvents.MESSAGE_SENT, (response, acknowledge) => {
            console.log('SocketEvents.MESSAGE_SENT', response)

            const validatedData = MessageSchema.parse(response)

            acknowledge({
                messageId: validatedData.id,
                status: 'RECEIVED',
            })
        })
        WebSocketApi.socket?.on(SocketEvents.ERROR, response => {
            console.log('SocketEvents.ERROR', response)
        })
        WebSocketApi.socket?.onAny(response => {
            console.log('WebSocketApi.socket?.onAny', response)
        })
    }

    useEffect(() => {
        if (isLoggedIn) {
            connectWS()
        }

        return () => {
            WebSocketApi.disconnect()
        }
    }, [isLoggedIn])
}
