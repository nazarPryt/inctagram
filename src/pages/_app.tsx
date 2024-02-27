import type {AppProps} from 'next/app'

import {ReactElement, ReactNode, useEffect} from 'react'
import cookie from 'react-cookies'

import {Providers} from '@/_app/Providers/Provider'
import {accessToken} from '@/shared/constants/constants'
import {useLoader} from '@/shared/hooks/useLoader'
import {NextPage} from 'next'
import {cookies} from 'next/headers'

import '@/shared/styles/nprogress.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    useLoader()

    const getLayout = Component.getLayout ?? (page => page)
    // const access = cookie.load(accessToken)
    //
    // useEffect(() => {
    //     // Create a WebSocket connection
    //     const socket = new WebSocket(`wss://inctagram.work/notifications?accessToken=${access}`)
    //
    //     // WebSocket event handlers
    //     socket.addEventListener('open', event => {
    //         console.log('WebSocket connection opened', event)
    //     })
    //     socket.addEventListener('message', event => {
    //         const message = event.data
    //
    //         console.log('Received message:', message)
    //     })
    //     socket.addEventListener('close', event => {
    //         console.log('WebSocket connection closed', event)
    //     })
    //
    //     return () => {
    //         // Close the WebSocket connection
    //         socket.close()
    //     }
    // }, [])

    return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
}
