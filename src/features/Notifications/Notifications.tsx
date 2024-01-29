import {useState} from 'react'

import {useTranslation} from '@/shared/hooks/useTranslation'
import {Popover} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationWrapper} from './Notification.styled'
import {NotificationIcon} from './ui/NotificationIcon'
import {NotificationItem} from './ui/NotificationItem'

export const Notifications = () => {
    const {t} = useTranslation()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    return (
        <Popover
            icon={<NotificationIcon notificationCount={5} />}
            isOpen={isPopoverOpen}
            onOpenChange={setIsPopoverOpen}
        >
            <NotificationWrapper>
                <h3>{t.header.notification.notifications}:</h3>
                <NotificationItem isNew />
                <NotificationItem isNew />
                <NotificationItem isNew={false} />
            </NotificationWrapper>
        </Popover>
    )
}
