import {ReactNode} from 'react'
import {Provider} from 'react-redux'

import ErrorBoundary from '@/_app/Providers/ErrorBoundary'
import {Theme} from '@/_app/Providers/Theme'
import {WebSocket} from '@/_app/Providers/WebSocket'
import {store} from '@/_app/Store/store'

export function Providers({children}: {children: ReactNode}) {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <WebSocket>
                    <Theme>{children}</Theme>
                </WebSocket>
            </Provider>
        </ErrorBoundary>
    )
}
