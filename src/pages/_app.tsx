import type {AppProps} from 'next/app'
import React, {ReactElement, ReactNode} from 'react'
import {NextPage} from 'next'
import {Providers} from '_app/Provider'
import {useLoader} from 'shared/hooks/useLoader'
import '../common/styles/nprogress.css'
import {SessionProvider} from 'next-auth/react'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}
// export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
//     getLayout?: (page: ReactElement) => ReactElement
// }

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    useLoader()

    const getLayout = Component.getLayout ?? (page => page)

    return (
        <SessionProvider session={session}>
            <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
        </SessionProvider>
    )
}
