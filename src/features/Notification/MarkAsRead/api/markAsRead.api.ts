import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {MarkAsReadRequestType} from './markAsRead.types'

export const markAsReadApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        markAsRead: build.mutation<void, MarkAsReadRequestType>({
            invalidatesTags: ['Notifications'],
            query: body => ({
                body,
                method: 'PUT',
                url: `notifications/mark-as-read`,
            }),
        }),
    }),
})

export const {useMarkAsReadMutation} = markAsReadApi
