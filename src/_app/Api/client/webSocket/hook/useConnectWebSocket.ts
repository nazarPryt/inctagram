import {useEffect} from 'react'
import cookie from 'react-cookies'

import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {appSettings} from '@/_app/AppSettings'
import {useAuth} from '@/shared/hooks/useAuth'

import {SocketEvents} from '../helpers/socketEvents'

export const useConnectWebSocket = () => {
    const accessToken = cookie.load(appSettings.constants.accessToken)
    const {isLoggedIn} = useAuth()

    const connectWS = () => {
        WebSocketApi.createConnection(accessToken)
        WebSocketApi.socket?.on(SocketEvents.notifications, data => {
            console.log(SocketEvents.notifications, data)
        })
    }

    useEffect(() => {
        if (isLoggedIn) {
            connectWS()
        }
    }, [isLoggedIn])
}
