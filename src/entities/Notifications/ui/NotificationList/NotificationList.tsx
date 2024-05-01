import {EmptyNotificationList} from '@/entities/Notifications/ui/EmptyNotificationList'
import {Scrollbar} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationType} from '../../helpers/notifications.schema'
import {NotificationItem} from '../../ui/NotificationItem'
import {NotificationListStyled} from './NotificationList.styled'

type PropsType = {
    notifications: NotificationType[]
}
export const NotificationList = ({notifications}: PropsType) => {
    if (!notifications.length) {
        return <EmptyNotificationList />
    }

    return (
        <Scrollbar maxHeight={400} maxWidth={350}>
            <NotificationListStyled>
                {notifications.map(notification => {
                    return <NotificationItem key={notification.id} notification={notification} />
                })}
            </NotificationListStyled>
        </Scrollbar>
    )
}
