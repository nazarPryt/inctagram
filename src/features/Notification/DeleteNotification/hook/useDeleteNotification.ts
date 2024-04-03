import {toast} from 'react-toastify'

import {useDeleteNotificationMutation} from '../api/DeleteNotification.api'

export const useDeleteNotification = (id: number) => {
    const [deleteNotification, {isLoading: isDeleting}] = useDeleteNotificationMutation()

    const handleDeleteNotification = () => {
        deleteNotification(id)
            .unwrap()
            .then(() => {
                toast('Message was deleted', {type: 'success'})
            })
    }

    return {
        handleDeleteNotification,
        isDeleting,
    }
}
