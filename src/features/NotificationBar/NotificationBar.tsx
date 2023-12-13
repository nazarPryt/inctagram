import {useAppSelector} from 'shared/hooks/reduxHooks'
import {NotificationBarWrapper} from 'features/NotificationBar/styled'
import dynamic from 'next/dynamic'

const DynamicAlert = dynamic(() => import('features/NotificationBar/Alert/Alert').then(module => module.Alert))

export const NotificationBar = () => {
    const notifications = useAppSelector(state => state.app.notifications)

    return (
        <NotificationBarWrapper>
            {notifications.map(alert => {
                return <DynamicAlert key={alert.id} id={alert.id} message={alert.message} type={alert.type} />
            })}
        </NotificationBarWrapper>
    )
}
// https://github.com/daryanka/notification-component
// https://www.youtube.com/watch?v=KYKmqeU6lOI&list=PLw1B0qAczd1MpTJmhSQV4oNrYe-7OW8MK&index=1&t=1681s
