import {useState} from 'react'

import {useTranslation} from '@/shared/hooks/useTranslation'
import {Popover, Scrollbar} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationWrapper} from './Notification.styled'
import {NotificationIcon} from './ui/NotificationIcon'
import {NotificationItem} from './ui/NotificationItem'

export const Notifications = () => {
    const {t} = useTranslation()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [notificationCount, setNotificationCount] = useState(5)

    const handleOpenPopover = () => {
        setIsPopoverOpen(prev => !prev)
        setNotificationCount(0)
    }

    return (
        <Popover
            icon={<NotificationIcon notificationCount={notificationCount} />}
            isOpen={isPopoverOpen}
            onOpenChange={handleOpenPopover}
        >
            <NotificationWrapper>
                <h3>{t.header.notification.notifications}:</h3>
                <Scrollbar maxHeight={400}>
                    <NotificationItem isNew />
                    <NotificationItem />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem isNew />
                    <NotificationItem isNew={false} />
                </Scrollbar>
            </NotificationWrapper>
        </Popover>
    )
}
