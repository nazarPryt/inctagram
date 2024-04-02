import {useEffect, useState} from 'react'

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

    const unReadMessagesID: number[] = []

    console.log('unReadMessagesID', unReadMessagesID)
    console.log('notifications', notifications)
    const handleOpenPopover = () => {
        setIsPopoverOpen(prev => !prev)
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
                console.log('send to backend', unReadMessagesID)
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
                <Scrollbar maxHeight={400} maxWidth={350}>
                    <NotificationList notifications={notifications} />
                </Scrollbar>
            </NotificationWrapper>
        </Popover>
    )
}
