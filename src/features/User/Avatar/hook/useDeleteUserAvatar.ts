import { SetAppNotificationAC } from '_app/store/appSlice'
import { useDeleteAvatarMutation } from 'features/User/Avatar/api/avatar.api'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

export const useDeleteUserAvatar = () => {
  const dispatch = useAppDispatch()

  const [deleteAvatar, { isLoading }] = useDeleteAvatarMutation()

  const handleDeleteAvatar = (): void => {
    deleteAvatar({})
      .unwrap()
      .then(() => {
        dispatch(
          SetAppNotificationAC({
            notifications: { type: 'success', message: 'Your Avatar was successfully removed' },
          })
        )
      })
      .catch(error =>
        dispatch(SetAppNotificationAC({ notifications: { type: 'error', message: error.data.messages[0].message } }))
      )
  }

  return { handleDeleteAvatar, isLoading }
}
