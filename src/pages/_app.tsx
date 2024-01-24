import type {AppProps} from 'next/app'

import {ReactElement, ReactNode} from 'react'

import {Providers} from '_app/Provider'
import {NextPage} from 'next'
import {useLoader} from 'shared/hooks/useLoader'

import 'shared/styles/nprogress.css'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    useLoader()

    const getLayout = Component.getLayout ?? (page => page)

    return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
}
