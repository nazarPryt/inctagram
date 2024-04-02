import {useEffect, useMemo, useState} from 'react'

import {useGetNotificationsQuery} from '../api/getNotifications.api'

export const useGetNotifications = () => {
    const {data} = useGetNotificationsQuery(0)
    const [newNotifications, setNewNotifications] = useState(0)
    const notifications = useMemo(() => (data ? data.items ?? [] : []), [data])

    useEffect(() => {
        if (data && data.totalCount) {
            setNewNotifications(data.items.filter(notification => !notification.isRead).length)
        }
    }, [data])

    return {
        newNotifications,
        notifications,
    }
}
