import {useEffect} from 'react'

import {useRouter} from 'next/router'
import NProgress from 'nprogress'

export const useLoader = () => {
    const router = useRouter()

    useEffect(() => {
        const startLoading = () => NProgress.start()
        const endLoading = () => NProgress.done()

        router.events.on('routeChangeStart', startLoading)
        router.events.on('routeChangeComplete', endLoading)
        router.events.on('routeChangeError', endLoading)

        return () => {
            router.events.off('routeChangeStart', startLoading)
            router.events.off('routeChangeComplete', endLoading)
            router.events.off('routeChangeError', endLoading)
        }
    }, [router])
}
// https://socket.dev/npm/package/next13-nprogress   another, similar library to try later
