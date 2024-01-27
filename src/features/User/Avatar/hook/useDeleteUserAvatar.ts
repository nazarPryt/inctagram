import {SetAppNotificationAC} from '@/_app/store/appSlice'
import {useDeleteAvatarMutation} from '@/features/User/Avatar/api/avatar.api'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'

export const useDeleteUserAvatar = () => {
    const dispatch = useAppDispatch()

    const [deleteAvatar, {isLoading}] = useDeleteAvatarMutation()

    const handleDeleteAvatar = () => {
        deleteAvatar({})
            .unwrap()
            .then(() => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: 'Your Avatar was successfully removed', type: 'success'},
                    })
                )
            })
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {message: error.data.messages[0].message, type: 'error'}})
                )
            )
    }

    return {handleDeleteAvatar, isLoading}
}
