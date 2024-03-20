import {ReactNode} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {useMeQuery} from '@/features/Auth/Me/api/me.api'
import {useAuth} from '@/shared/hooks/useAuth'
import {useRouter} from 'next/router'

export const Auth = ({children}: {children: ReactNode}) => {
    const router = useRouter()
    const {user} = useAuth()

    // if (isError) {
    //     // router.push(PATH.LOGIN)
    // }
    // if (isSuccess) {
    //     // router.push(PATH.HOME)
    // }

    return <>{children}</>
}
