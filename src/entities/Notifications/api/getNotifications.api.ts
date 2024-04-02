import {rtkQuery} from '@/_app/Api/client/rtkQuery'

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
                return getNotificationsSchema.parse(response)
            },
        }),
    }),
})

export const {useGetNotificationsQuery} = getNotificationsApi
