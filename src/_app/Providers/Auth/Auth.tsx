import {ReactNode} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {useAuth} from '@/shared/hooks/useAuth'
import {useRouter} from 'next/router'

export const Auth = ({children}: {children: ReactNode}) => {
    const router = useRouter()
    const {isLoggedIn} = useAuth()

    if (!isLoggedIn) {
        void router.push(PATH.LOGIN)
    }
    if (isLoggedIn) {
        void router.push(PATH.HOME)
    }

    return <>{children}</>
}
