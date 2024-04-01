import {useEffect} from 'react'
import cookie from 'react-cookies'

import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {appSettings} from '@/_app/AppSettings'
import {useAuth} from '@/shared/hooks/useAuth'

export const useConnectWebSocket = () => {
    const accessToken = cookie.load(appSettings.constants.accessToken)
    const {userId} = useAuth()

    const connectWS = () => {
        WebSocketApi.createConnection(accessToken)
        WebSocketApi.socket?.on('notifications', data => {
            console.log('notification', data)
        })
    }

    useEffect(() => {
        if (userId) {
            connectWS()
        }
    }, [])
}
