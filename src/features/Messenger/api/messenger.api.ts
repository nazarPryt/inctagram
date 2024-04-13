import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {AllChatsSchema} from '@/features/Messenger/helpers/allChats.schema'

export const messengerAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAllChats: build.query({
            query: () => ({
                method: 'GET',
                url: 'messanger',
            }),
            transformResponse: response => {
                return AllChatsSchema.parse(response)
            },
        }),
        getChatMessages: build.query<{}, number>({
            query: dialoguePartnerId => ({
                method: 'GET',
                url: `messanger/${dialoguePartnerId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetAllChatsQuery, useGetChatMessagesQuery} = messengerAPI
