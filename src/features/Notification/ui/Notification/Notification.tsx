import { useState } from 'react'

import { NotificationIcon } from '../NotificationIcon/NotificationIcon'
import { NotificationItem } from '../NotificationItem/NotificationItem'

import { NotificationWrapper } from './Notification.styled'

import { useTranslation } from 'shared/hooks/useTranslation'
import { Popover } from 'shared/ui/Popover/Popover'

export const Notification = (): JSX.Element => {
  const { t } = useTranslation()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <NotificationWrapper>
      <Popover
        icon={<NotificationIcon hasNotification notificationCount={3} />}
        isPopoverOpen={isPopoverOpen}
        setIsPopoverOpen={setIsPopoverOpen}
      >
        <h3>{t.header.notification.notifications}:</h3>
        <NotificationItem isNew />
        <NotificationItem isNew />
        <NotificationItem isNew={false} />
      </Popover>
    </NotificationWrapper>
  )
}
