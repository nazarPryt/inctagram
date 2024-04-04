import {getNotificationsApi} from '@/entities/Notifications/api/getNotifications.api'

import {NotificationSocketResponseType, notificationSocketResponseSchema} from '../helpers/NotifcationWS.schema'

type PropsType = {
    dispatch: any
    response: NotificationSocketResponseType
}
export const handleWebSocketNotification = ({dispatch, response}: PropsType) => {
    console.log('notificationSocketResponse: ', response)
    if (response) {
        const newMessage = notificationSocketResponseSchema.parse(response)

        console.log('newMessage: ', newMessage)
        dispatch(
            getNotificationsApi.util.updateQueryData('getNotifications', 0, oldData => {
                oldData.items.unshift(newMessage)
            })
        )
    }
}
//todo use in useConnectWebSocket (figure out why it doesnt work)
