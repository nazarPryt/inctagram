import {useState} from 'react'

import {useMarkAsRead} from '@/features/Notification/MarkAsRead/hook/useMarkAsRead'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Popover} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationWrapper} from './Notification.styled'
import {useGetNotifications} from './hook/useGetNotifications'
import {NotificationIcon} from './ui/NotificationIcon'
import {NotificationList} from './ui/NotificationList'

export const Notifications = () => {
    const {t} = useTranslation()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const {amountOfNewNotifications, notifications} = useGetNotifications()

    useMarkAsRead({isPopoverOpen, notifications})

    const handleOpenPopover = () => {
        setIsPopoverOpen(prev => !prev)
    }

    return (
        <Popover
            icon={<NotificationIcon amountOfNewNotifications={amountOfNewNotifications} />}
            isOpen={isPopoverOpen}
            onOpenChange={handleOpenPopover}
        >
            <NotificationWrapper>
                <h3>{t.header.notification.notifications}:</h3>

                <NotificationList notifications={notifications} />
            </NotificationWrapper>
        </Popover>
    )
}
