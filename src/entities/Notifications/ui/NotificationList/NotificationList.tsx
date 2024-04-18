import {NotificationType} from '../../helpers/notifications.schema'
import {NotificationItem} from '../../ui/NotificationItem'
import {NotificationListStyled} from './NotificationList.styled'

type PropsType = {
    notifications: NotificationType[]
}
export const NotificationList = ({notifications}: PropsType) => {
    return (
        <NotificationListStyled>
            {notifications.map(notification => {
                return <NotificationItem key={notification.id} notification={notification} />
            })}
        </NotificationListStyled>
    )
}
