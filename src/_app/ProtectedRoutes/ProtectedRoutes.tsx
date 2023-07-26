//check if you are on the client (browser) or server
import {PATH} from 'shared/constants/PATH'
import {useSession} from 'next-auth/react'
import {usePathname, useRouter} from 'next/navigation'

const isBrowser = () => typeof window !== 'undefined'

const ProtectedRoute = (props: {children: any}) => {
    const {status} = useSession()
    const pathname = usePathname()
    const router = useRouter()
    const isAuthenticated = status === 'authenticated'

    let unprotectedRoutes = [
        PATH.LOGIN,
        PATH.REGISTRATION,
        PATH.FORGOT_PASSWORD,
        PATH.REGISTRATION_CONFIRMED,
        PATH.EXPIRED_LINK,
        PATH.CREATE_NEW_PASSWORD,
    ]

    /**
     * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
     */
    // @ts-ignore
    let pathIsProtected = unprotectedRoutes.indexOf(pathname) === -1

    if (isBrowser() && !isAuthenticated && pathIsProtected) {
        router.push(PATH.LOGIN)
    }

    return props.children
}

export default ProtectedRoute
// https://azeezatraheem.medium.com/implementing-authentication-redirects-in-next-js-c15907ec82b7
