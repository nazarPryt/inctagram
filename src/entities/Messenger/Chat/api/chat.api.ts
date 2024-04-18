import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'

import {GetChatSchema, GetChatType, MessageSchema} from '../helpers/Chat.schema'

//https://redux-toolkit.js.org/rtk-query/usage/streaming-updates

export const chatAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getChatMessages: build.query({
            async onCacheEntryAdded(arg, {cacheDataLoaded, cacheEntryRemoved, getState, updateCachedData}) {
                try {
                    await cacheDataLoaded
                    WebSocketApi.socket?.on(SocketEvents.RECEIVE_MESSAGE, response => {
                        console.log('socket?.on(SocketEvents.RECEIVE_MESSAGE', response)
                        const validatedMessage = MessageSchema.parse(response)

                        updateCachedData((draft: GetChatType) => {
                            const existedMessage = draft.items.find(message => message.id === validatedMessage.id)

                            if (existedMessage && existedMessage.status === 'SENT') {
                                existedMessage.status = 'RECEIVED'
                            } else if (existedMessage && existedMessage.status === 'RECEIVED') {
                                existedMessage.status = 'READ'
                            } else {
                                draft.items.push(validatedMessage)
                            }
                        })
                    })
                } catch (err) {
                    console.log(err)
                }

                await cacheEntryRemoved
            },
            providesTags: ['Messages'],
            query: dialoguePartnerId => ({
                method: 'GET',
                url: `messanger/${dialoguePartnerId}`,
            }),
            transformResponse: response => {
                const validatedResponse = GetChatSchema.parse(response)

                validatedResponse.items.reverse()

                return validatedResponse
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetChatMessagesQuery} = chatAPI
