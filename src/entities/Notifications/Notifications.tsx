import {useEffect, useMemo, useState} from 'react'

import {useGetNotificationsQuery} from '@/entities/Notifications/api/getNotifications.api'
import {useGetNotifications} from '@/entities/Notifications/hook/useGetNotifications'
import {NotificationList} from '@/entities/Notifications/ui/NotificationList'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Loader, Popover, Scrollbar} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationWrapper} from './Notification.styled'
import {NotificationIcon} from './ui/NotificationIcon'
import {NotificationItem} from './ui/NotificationItem'

export const Notifications = () => {
    const {t} = useTranslation()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const {newNotifications, notifications} = useGetNotifications()

    const handleOpenPopover = () => {
        setIsPopoverOpen(prev => !prev)
    }

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
