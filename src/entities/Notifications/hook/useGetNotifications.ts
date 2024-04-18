import {useEffect, useMemo, useState} from 'react'

import {useGetNotificationsQuery} from '../api/getNotifications.api'

export const useGetNotifications = () => {
    const {data} = useGetNotificationsQuery(0)
    const [amountOfNewNotifications, setAmountOfNewNotifications] = useState(0)
    const notifications = useMemo(() => (data ? data.items ?? [] : []), [data])

    useEffect(() => {
        if (data && data.totalCount) {
            const updatedAmount = data.items.filter(notification => !notification.isRead).length

            setAmountOfNewNotifications(updatedAmount)
        }
    }, [data])

    return {
        amountOfNewNotifications,
        notifications,
    }
}
