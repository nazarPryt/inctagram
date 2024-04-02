import {useMarkAsReadMutation} from '@/features/Notification/MarkAsRead/api/markAsRead.api'
import {useFormatDistance} from '@/shared/hooks/useFormatDistance'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {ReadMore} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationType} from '../../helpers/notifications.schema'
import {NotificationItemWrapper} from './NotificationItem.styled'

type PropsType = {
    notification: NotificationType
}
export const NotificationItem = ({notification}: PropsType) => {
    const notifyAt = useFormatDistance(notification.notifyAt)
    const {t} = useTranslation()
    const [markAsRead, {isLoading}] = useMarkAsReadMutation()

    const handleMarkAsRead = () => {
        markAsRead({ids: [+notification.id]})
            .unwrap()
            .then(res => {
                console.log('res', res)
            })
    }

    return (
        <NotificationItemWrapper disabled={isLoading} onClick={handleMarkAsRead}>
            <div>
                <h4>{t.header.notification.newNotification}</h4>{' '}
                {!notification.isRead && <p className={'new'}>{t.header.notification.new}</p>}
            </div>

            <p className={'text'}>
                <ReadMore maxLength={100} text={notification.message} />
            </p>
            <span className={'createdAt'}>{notifyAt}</span>
        </NotificationItemWrapper>
    )
}
