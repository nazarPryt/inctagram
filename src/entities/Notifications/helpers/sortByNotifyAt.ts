import {GetNotificationsType} from '../helpers/notifications.schema'

export const sortByNotifyAt = (response: GetNotificationsType) => {
    // Sort the array by the notifyAt field put the newest on the top

    response.items.sort((a, b) => new Date(a.notifyAt).getTime() - new Date(b.notifyAt).getTime())

    return response
}
