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
                const validatedChats = GetAllChatsSchema.parse(response)

                // sort the newest chats on the top
                validatedChats.items.sort((a, b) => new Date(a.updatedAt).getTime() + new Date(b.updatedAt).getTime())

                return validatedChats
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetAllChatsQuery} = allChatsAPI
