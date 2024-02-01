import {useState} from 'react'

import {useDeleteAvatarMutation} from '@/features/User/Avatar/api/avatar.api'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '@/shared/store/appSlice'

export const useDeleteUserAvatar = () => {
    const dispatch = useAppDispatch()
    const [dialog, setDialog] = useState(false)

    const [deleteAvatar, {isLoading}] = useDeleteAvatarMutation()

    const handleCloseDialog = () => {
        setDialog(false)
    }
    const handleOpenDialog = () => {
        setDialog(true)
    }
    const handleDeleteAvatar = () => {
        deleteAvatar({})
            .unwrap()
            .then(() => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: 'Your Avatar was successfully removed', type: 'success'},
                    })
                )
                handleCloseDialog()
            })
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {message: error.data.messages[0].message, type: 'error'}})
                )
            )
    }

    return {dialog, handleCloseDialog, handleDeleteAvatar, handleOpenDialog, isLoading}
}
