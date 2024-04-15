import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {GetAllChatsSchema} from '../helpers/getAllChatsSchema'

export const allChatsAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAllChats: build.query({
            providesTags: ['Chats'],
            query: () => ({
                method: 'GET',
                url: 'messanger',
            }),
            transformResponse: response => {
                return GetAllChatsSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetAllChatsQuery} = allChatsAPI
