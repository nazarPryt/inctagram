import {OutlineBell} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationIconWrapper} from './NotificationIcon.styled'

type PropsType = {
    amountOfNewNotifications: number
}
export const NotificationIcon = ({amountOfNewNotifications}: PropsType) => {
    const hasNotification = amountOfNewNotifications > 0

    return (
        <NotificationIconWrapper>
            <OutlineBell />
            {hasNotification && <span className={'count'}>{amountOfNewNotifications}</span>}
        </NotificationIconWrapper>
    )
}
