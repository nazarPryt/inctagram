import {useEffect} from 'react'
import {toast} from 'react-toastify'

import {NotificationType} from '@/entities/Notifications/helpers/notifications.schema'

import {useMarkAsReadMutation} from '../api/markAsRead.api'
type PropsType = {
    isPopoverOpen: boolean
    notifications: NotificationType[]
}
export const useMarkAsRead = ({isPopoverOpen, notifications}: PropsType) => {
    const [markAsRead] = useMarkAsReadMutation()
    const unReadMessagesID: number[] = []

    useEffect(() => {
        let timeoutID: any

        notifications.forEach(message => {
            if (!message.isRead) {
                unReadMessagesID.push(message.id)
            }
        })
        if (isPopoverOpen && !!unReadMessagesID.length) {
            timeoutID = setTimeout(() => {
                markAsRead({ids: unReadMessagesID})
                    .unwrap()
                    .then(() => {
                        toast('Notifications were marked as read', {type: 'success'})
                    })
            }, 3000)
        }

        return () => {
            if (timeoutID) {
                clearTimeout(timeoutID)
            }
        }
    }, [unReadMessagesID, isPopoverOpen])
}
