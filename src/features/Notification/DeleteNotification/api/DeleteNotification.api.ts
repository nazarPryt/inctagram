import {rtkQuery} from '@/_app/Api/client/rtkQuery'

export const deleteNotificationApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        deleteNotification: build.mutation<void, number>({
            invalidatesTags: ['Notifications'],
            query: id => ({
                method: 'DELETE',
                url: `notifications/${id}`,
            }),
        }),
    }),
})

export const {useDeleteNotificationMutation} = deleteNotificationApi
