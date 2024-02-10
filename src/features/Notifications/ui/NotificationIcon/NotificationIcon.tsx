import {OutlineBell} from '@nazar-pryt/inctagram-ui-kit'

import {NotificationIconWrapper} from './NotificationIcon.styled'

type PropsType = {
    notificationCount: number
}
export const NotificationIcon = ({notificationCount}: PropsType) => {
    const hasNotification = notificationCount > 0

    return (
        <NotificationIconWrapper>
            <OutlineBell />
            {hasNotification && <span className={'count'}>{notificationCount}</span>}
        </NotificationIconWrapper>
    )
}
