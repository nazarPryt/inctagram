import {SetAppNotificationAC} from '_app/store/appSlice'
import {UseFormSetError} from 'react-hook-form'

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
                notifications: {type: 'error', message: error.data.messages},
            })
        )
    } else {
        dispatch(
            SetAppNotificationAC({
                notifications: {type: 'error', message: 'Something went wrong, Try again please!!'},
            })
        )
    }
}
