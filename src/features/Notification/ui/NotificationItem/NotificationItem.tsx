import {useTranslation} from '@/shared/hooks/useTranslation'

import {NotificationItemWrapper} from './NotificationItem.styled'

type PropsType = {
    isNew: boolean
}
export const NotificationItem = ({isNew}: PropsType) => {
    const {t} = useTranslation()

    return (
        <NotificationItemWrapper>
            {isNew ? (
                <div>
                    <h4>{t.header.notification.newNotification}</h4>{' '}
                    <p className={'new'}>{t.header.notification.new}</p>
                </div>
            ) : (
                <h4>{t.header.notification.newNotification}</h4>
            )}
            <span>Your subscription expires in 7 days 1 day ago</span>
            <p>1 day ago</p>
        </NotificationItemWrapper>
    )
}
