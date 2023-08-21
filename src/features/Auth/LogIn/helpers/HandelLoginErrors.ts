import {SetAppNotificationAC} from '_app/store/appSlice'

export const HandelLoginErrors = (error: any, dispatch: any) => {
    if (error.status === 401) {
        dispatch(
            SetAppNotificationAC({
                notifications: {
                    type: 'error',
                    message: 'This email address is not registered. Please register',
                },
            })
        )
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
