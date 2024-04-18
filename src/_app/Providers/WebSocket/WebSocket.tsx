import {ReactNode} from 'react'

import {useConnectWebSocket} from '@/_app/Api/client/webSocket'

export function WebSocket({children}: {children: ReactNode}) {
    useConnectWebSocket()

    return <>{children}</>
}
