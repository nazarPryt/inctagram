import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {GetAllChatsSchema} from '@/entities/Messenger/AllChats/helpers/getAllChatsSchema'

export const allChatsAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAllChats: build.query({
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
