import {UseFormSetError} from 'react-hook-form'

import {SetAppNotificationAC} from '@/shared/store/appSlice'

export const HandelLoginErrors = (
    error: any,
    dispatch: any,
    setError: UseFormSetError<{email: string; password: string}>
) => {
    if (error.status === 401) {
        setError('email', {message: 'This email address is not registered. Please register'})
    } else if (error.data.messages) {
        dispatch(
            SetAppNotificationAC({
                notifications: {message: error.data.messages, type: 'error'},
            })
        )
    } else {
        dispatch(
            SetAppNotificationAC({
                notifications: {message: 'Something went wrong, Try again please!!', type: 'error'},
            })
        )
    }
}
