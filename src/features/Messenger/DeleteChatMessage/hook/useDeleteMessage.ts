import {toast} from 'react-toastify'

import {useDeleteMessageMutation} from '../api/deleteMessage.api'

export const useDeleteMessage = () => {
    const [deleteMessage] = useDeleteMessageMutation()

    const handleDeleteMessage = (id: number) => {
        deleteMessage(id)
            .unwrap()
            .then(() => {
                toast('message was deleted', {type: 'success'})
            })
            .catch(e => {
                toast(`cant deleted this message: ${e}`, {type: 'error'})
            })
    }

    return {
        handleDeleteMessage,
    }
}
