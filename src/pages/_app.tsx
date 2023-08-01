import type {AppProps} from 'next/app'
import React, {ReactElement, ReactNode} from 'react'
import {NextPage} from 'next'
import {Providers} from '_app/Provider'
import {useLoader} from 'shared/hooks/useLoader'
import 'shared/styles/nprogress.css'
import {SessionProvider} from 'next-auth/react'
import {Inter} from 'next/font/google'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
const inter = Inter({subsets: ['latin']})

export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    useLoader()

    const getLayout = Component.getLayout ?? (page => page)

    return (
        <Providers>
            <SessionProvider session={session}>
                {getLayout(
                    <>
                        <style jsx global>{`
                            html {
                                font-family: ${inter.style.fontFamily};
                            }
                        `}</style>
                        <Component {...pageProps} />
                    </>
                )}
            </SessionProvider>
        </Providers>
    )
}
