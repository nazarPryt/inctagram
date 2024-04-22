import {useEffect} from 'react'
import {toast} from 'react-toastify'

import {MessageType} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {useUpdateMessageStatusMutation} from '@/features/Messenger/UpdateMessageStatus/api/updateMessage.api'
import {useAuth} from '@/shared/hooks/useAuth'

type PropsType = {
    messages: MessageType[]
}
export const useUpdateMessageStatus = ({messages}: PropsType) => {
    const {userId} = useAuth()
    const [markAsRead] = useUpdateMessageStatusMutation()
    const unReadMessagesID: number[] = []

    useEffect(() => {
        let timeoutID: any

        messages.forEach(message => {
            if (message.status !== 'READ' && message.ownerId === userId) {
                unReadMessagesID.push(message.id)
            }
        })
        if (unReadMessagesID.length) {
            timeoutID = setTimeout(() => {
                markAsRead({ids: unReadMessagesID})
                    .unwrap()
                    .then(() => {
                        toast('Notifications were marked as read', {type: 'success'})
                    })
                    .catch(() => {
                        toast('failed to marked as read', {type: 'error'})
                    })
            }, 3000)
        }

        return () => {
            if (timeoutID) {
                clearTimeout(timeoutID)
            }
        }
    }, [unReadMessagesID])
}
