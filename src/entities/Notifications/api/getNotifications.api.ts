import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {sortByNotifyAt} from '@/entities/Notifications/helpers/sortByNotifyAt'

import {getNotificationsSchema} from '../helpers/notifications.schema'

export const getNotificationsApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getNotifications: build.query({
            providesTags: ['Notifications'],
            query: cursor => ({
                method: 'GET',
                url: `notifications/${cursor}`,
            }),
            transformResponse: response => {
                const parsedResponse = getNotificationsSchema.parse(response)

                return sortByNotifyAt(parsedResponse)
            },
        }),
    }),
})

export const {useGetNotificationsQuery} = getNotificationsApi
