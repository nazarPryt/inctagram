import type {AppProps} from 'next/app'
import React, {ReactElement, ReactNode} from 'react'
import {NextPage} from 'next'
import {Providers} from '_app/Provider'
import {useLoader} from 'shared/hooks/useLoader'
import 'shared/styles/nprogress.css'
import {SessionProvider} from 'next-auth/react'
import '@fontsource-variable/inter'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}
//sayagih520@xgh6.com
//qwertQ1!
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL

    useLoader()

    const getLayout = Component.getLayout ?? (page => page)

    return (
        <Providers>
            <SessionProvider session={session} baseUrl={DOMAIN_URL} basePath={'/api/auth'}>
                {getLayout(
                    <>
                        <Component {...pageProps} />
                    </>
                )}
            </SessionProvider>
        </Providers>
    )
}
