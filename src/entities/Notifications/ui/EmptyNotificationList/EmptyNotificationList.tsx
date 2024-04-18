import {useTranslation} from '@/shared/hooks/useTranslation'
import {ShareIcon} from '@nazar-pryt/inctagram-ui-kit'

import {EmptyNotificationListStyled} from './EmptyNotificationList.styled'

export const EmptyNotificationList = () => {
    const {t} = useTranslation()

    return (
        <EmptyNotificationListStyled>
            <ShareIcon />
            <h5 className={'title'}>{t.header.notification.empty.title}</h5>
            <h6 className={'subTitle'}>{t.header.notification.empty.subTitle}</h6>
            <p>{t.header.notification.empty.p}</p>
        </EmptyNotificationListStyled>
    )
}
