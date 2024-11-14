import {useMemo} from 'react'

import {useGetNotificationsQuery} from '../api/getNotifications.api'

export const useGetNotifications = () => {
    const {data} = useGetNotificationsQuery(0)

    const notifications = useMemo(() => (data ? data.items ?? [] : []), [data])
    const amountOfNewNotifications = data ? data.notReadCount ?? 0 : 0

    return {
        amountOfNewNotifications,
        notifications,
    }
}
