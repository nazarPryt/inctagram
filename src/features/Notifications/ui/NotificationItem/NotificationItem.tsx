import {useTranslation} from '@/shared/hooks/useTranslation'
import {ReadMore} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationItemWrapper} from './NotificationItem.styled'

type PropsType = {
    isNew?: boolean
}
export const NotificationItem = ({isNew}: PropsType) => {
    const {t} = useTranslation()

    return (
        <NotificationItemWrapper>
            <div>
                <h4>{t.header.notification.newNotification}</h4>{' '}
                {isNew && <p className={'new'}>{t.header.notification.new}</p>}
            </div>

            <p className={'text'}>
                <ReadMore
                    maxLength={100}
                    text={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem corporis cumque deleniti dignissimos dolorem doloremque eveniet id, ipsa iste nihil nisi odio perferendis, porro quo ratione sed tempora voluptatibus.'
                    }
                />
            </p>
            <span className={'createdAt'}>1 day ago</span>
        </NotificationItemWrapper>
    )
}
