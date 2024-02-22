import {ReactNode} from 'react'

import {useMeQuery} from '@/features/Auth/Me/api/me.api'
import {PATH} from '@/shared/constants/PATH'
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
