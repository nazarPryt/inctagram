import {useEffect, useMemo, useState} from 'react'

import {useGetNotificationsQuery} from '@/entities/Notifications/api/getNotifications.api'
import {NotificationList} from '@/entities/Notifications/ui/NotificationList'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Loader, Popover, Scrollbar} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationWrapper} from './Notification.styled'
import {NotificationIcon} from './ui/NotificationIcon'
import {NotificationItem} from './ui/NotificationItem'

export const Notifications = () => {
    const {data, isLoading} = useGetNotificationsQuery(0)
    const {t} = useTranslation()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [notificationCount, setNotificationCount] = useState(0)

    const handleOpenPopover = () => {
        setIsPopoverOpen(prev => !prev)
        // setNotificationCount(0)
    }

    const notifications = useMemo(() => (data ? data.items ?? [] : []), [data])

    useEffect(() => {
        if (data && data.totalCount) {
            setNotificationCount(data.totalCount)
        }
    }, [data])

    return (
        <Popover
            icon={<NotificationIcon notificationCount={notificationCount} />}
            isOpen={isPopoverOpen}
            onOpenChange={handleOpenPopover}
        >
            <NotificationWrapper>
                <h3>{t.header.notification.notifications}:</h3>
                {isLoading && <Loader />}
                <Scrollbar maxHeight={400}>
                    <NotificationList notifications={notifications} />
                </Scrollbar>
            </NotificationWrapper>
        </Popover>
    )
}
