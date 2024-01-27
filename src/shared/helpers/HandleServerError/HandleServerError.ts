import {SetAppNotificationAC} from '@/_app/store/appSlice'

export const HandleServerError = (error: any, dispatch: any) => {
    if (error.data.messages) {
        dispatch(
            SetAppNotificationAC({
                notifications: {message: error.data.messages, type: 'error'},
            })
        )
    } else if (error.data.messages[0]) {
        dispatch(
            SetAppNotificationAC({
                notifications: {message: error.data.messages[0].message, type: 'error'},
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
