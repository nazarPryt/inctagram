import {useState} from 'react'

import {useMarkAsRead} from '@/features/Notification/MarkAsRead/hook/useMarkAsRead'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Popover, Scrollbar} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationWrapper} from './Notification.styled'
import {useGetNotifications} from './hook/useGetNotifications'
import {EmptyNotificationList} from './ui/EmptyNotificationList'
import {NotificationIcon} from './ui/NotificationIcon'
import {NotificationList} from './ui/NotificationList'

export const Notifications = () => {
    const {t} = useTranslation()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const {newNotifications, notifications} = useGetNotifications()

    useMarkAsRead({isPopoverOpen, notifications})

    const handleOpenPopover = () => {
        setIsPopoverOpen(prev => !prev)
    }

    const empty = !notifications.length

    return (
        <Popover
            icon={<NotificationIcon notificationCount={newNotifications} />}
            isOpen={isPopoverOpen}
            onOpenChange={handleOpenPopover}
        >
            <NotificationWrapper>
                <h3>{t.header.notification.notifications}:</h3>
                {empty && <EmptyNotificationList />}
                <Scrollbar maxHeight={400} maxWidth={350}>
                    <NotificationList notifications={notifications} />
                </Scrollbar>
            </NotificationWrapper>
        </Popover>
    )
}
