import {useEffect, useState} from 'react'
import {toast} from 'react-toastify'

import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {getNotificationsApi} from '@/entities/Notifications/api/getNotifications.api'
import {GetNotificationsType, NotificationType} from '@/entities/Notifications/helpers/notifications.schema'
import {useMarkAsReadMutation} from '@/features/Notification/MarkAsRead/api/markAsRead.api'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Popover, Scrollbar} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationWrapper} from './Notification.styled'
import {useGetNotifications} from './hook/useGetNotifications'
import {NotificationIcon} from './ui/NotificationIcon'
import {NotificationList} from './ui/NotificationList'

export const Notifications = () => {
    const {t} = useTranslation()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const {newNotifications, notifications} = useGetNotifications()
    const [markAsRead] = useMarkAsReadMutation()
    const dispatch = useAppDispatch()

    const unReadMessagesID: number[] = []

    console.log('unReadMessagesID', unReadMessagesID)
    console.log('notifications', notifications)
    const handleOpenPopover = () => {
        setIsPopoverOpen(prev => !prev)
    }

    const handlemore = () => {
        console.log('more start')

        const newMessage: NotificationType = {
            id: 222,
            isRead: false,
            message: 'my just made message',
            notifyAt: '2024-03-27T11:45:23.786Z',
        }

        dispatch(
            getNotificationsApi.util.updateQueryData('getNotifications', 0, oldData => {
                console.log('oldData', oldData)
                oldData.items.unshift(newMessage)
            })
        )

        console.log('more finish')
    }

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

    return (
        <Popover
            icon={<NotificationIcon notificationCount={newNotifications} />}
            isOpen={isPopoverOpen}
            onOpenChange={handleOpenPopover}
        >
            <NotificationWrapper>
                <h3>{t.header.notification.notifications}:</h3>
                <button onClick={handlemore}>more</button>
                <Scrollbar maxHeight={400} maxWidth={350}>
                    <NotificationList notifications={notifications} />
                </Scrollbar>
            </NotificationWrapper>
        </Popover>
    )
}
