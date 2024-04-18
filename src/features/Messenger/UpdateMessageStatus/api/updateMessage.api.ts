import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {UpdateMessageType} from './updateMessage.type'

export const updateMessageApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        updateMessageStatus: build.mutation<void, UpdateMessageType>({
            query: body => ({
                body,
                method: 'PUT',
                url: `messanger`,
            }),
        }),
    }),
})

export const {useUpdateMessageStatusMutation} = updateMessageApi
