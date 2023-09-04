import {SetAppNotificationAC} from '_app/store/appSlice'

export const HandleServerError = (error: any, dispatch: any) => {
    if (error.data.messages) {
        dispatch(
            SetAppNotificationAC({
                notifications: {type: 'error', message: error.data.messages},
            })
        )
    } else if (error.data.messages[0]) {
        dispatch(
            SetAppNotificationAC({
                notifications: {type: 'error', message: error.data.messages[0].message},
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
