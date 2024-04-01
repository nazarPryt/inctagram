import {appSettings} from '@/_app/AppSettings'
import {Socket, io} from 'socket.io-client'

const WS_URL = appSettings.env.WS_URL

export class WebSocketApi {
    static socket: Socket | null = null
    static createConnection(accessToken: string) {
        const options = {
            query: {
                accessToken,
            },
        }

        this.socket = io(WS_URL, options)

        this.socket.on('connect', () => {
            console.log('Web Socket Connected')
        })
        this.socket.on('connect_error', error => {
            console.log('Web Socket connect_error', error)
        })

        this.socket.on('disconnect', () => {
            console.log('Web Socket Disconnected')
        })
    }
}
