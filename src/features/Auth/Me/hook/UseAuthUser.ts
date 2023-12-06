import {PATH} from 'shared/constants/PATH'
import {useMeQuery} from 'features/Auth/Me/api/Me.api'
import {useRouter} from 'next/router'
import {useEffect} from 'react'

export const useAuthUser = () => {
    const router = useRouter()
    const {data: user, isLoading} = useMeQuery()

    useEffect(() => {
        if (!user) {
            router.push(PATH.LOGIN)
        }
    }, [])

    return {
        user,
        isLoading,
    }
}
