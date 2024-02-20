import {useMeQuery} from '@/features/Auth/Me/api/Me.api'
import {useAppSelector} from '@/shared/hooks/reduxHooks'

export const useAuth = () => {
    // const {data, isLoading, isSuccess, status} = useMeQuery()
    const user = useAppSelector(state => state.userAuth)

    const userId = user.userId
    const userName = user.userName
    const email = user.email

    return {
        email,
        user,
        userId,
        userName,
    }
}
