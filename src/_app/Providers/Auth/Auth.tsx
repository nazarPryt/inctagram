import {ReactNode, useEffect} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {protectedRoutes, unProtectedRoutes} from '@/_app/AppSettings/routes'
import {useMeQuery} from '@/features/Auth/Me/api/me.api'
import {useAuth} from '@/shared/hooks/useAuth'
import {useRouter} from 'next/router'

export const Auth = ({children}: {children: ReactNode}) => {
    const {isError, isSuccess} = useMeQuery()
    const {isLoggedIn} = useAuth()

    const router = useRouter()

    const currentPath = router.pathname

    // if (!isLoggedIn) {
    //     void router.push(PATH.LOGIN)
    // }
    // if (isLoggedIn) {
    //     void router.push(PATH.HOME)
    // }
    // useEffect(() => {
    //     // if (protectedRoutes.some(route => currentPath.startsWith(route)) && isLoggedIn) {
    //     //     return
    //     // }
    //     // if (protectedRoutes.some(route => currentPath.startsWith(route)) && !isLoggedIn) {
    //     //     void router.push(PATH.LOGIN)
    //     // }
    //     // if (currentPath.includes('/') && !isLoggedIn) {
    //     //     void router.push(PATH.LOGIN)
    //     // }
    //     // if (currentPath.includes('/') && isLoggedIn) {
    //     //     void router.push(PATH.HOME)
    //     // }
    //     // if (unProtectedRoutes.some(route => currentPath.startsWith(route)) && isLoggedIn) {
    //     //     void router.push(PATH.HOME)
    //     // }
    //     // if (!isLoggedIn) {
    //     //     void router.push(PATH.LOGIN)
    //     // }
    //     // if (isLoggedIn) {
    //     //     void router.push(PATH.HOME)
    //     // }
    // }, [currentPath])

    return <>{children}</>
}
