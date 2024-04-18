import {useAppSelector} from '@/shared/hooks/reduxHooks'

export const useAuth = () => {
    const user = useAppSelector(state => state.userAuth)

    const userId = user.userId
    const userName = user.userName
    const email = user.email
    const isLoggedIn = !!userId && !!email && !!userName

    return {
        email,
        isLoggedIn,
        user,
        userId,
        userName,
    }
}
