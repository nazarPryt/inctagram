import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {GetChatSchema} from '@/entities/Messenger/Chat/helpers/Chat.schema'

export const chatAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getChatMessages: build.query({
            query: dialoguePartnerId => ({
                method: 'GET',
                url: `messanger/${dialoguePartnerId}`,
            }),
            transformResponse: response => {
                return GetChatSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetChatMessagesQuery} = chatAPI
