import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'
import {z} from 'zod'

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

                        const arrayOfMessages = z.array(MessageSchema)

                        const validatedData =
                            response instanceof Array ? arrayOfMessages.parse(response) : MessageSchema.parse(response)

                        // Check the type of the validated data
                        if (Array.isArray(validatedData)) {
                            // Handle array logic
                            console.log('Response is an array:', validatedData)
                            updateCachedData((draft: GetChatType) => {
                                for (let i = 0; i < validatedData.length; i++) {
                                    draft.items.map(message => {
                                        if (message.id === validatedData[i].id) {
                                            message.status = 'READ'
                                        }
                                    })
                                }
                            })
                        } else {
                            // Handle object logic
                            updateCachedData((draft: GetChatType) => {
                                const existedMessage = draft.items.find(message => message.id === validatedData.id)

                                if (existedMessage && existedMessage.status === 'SENT') {
                                    existedMessage.status = 'RECEIVED'
                                } else if (existedMessage && existedMessage.status === 'RECEIVED') {
                                    existedMessage.status = 'READ'
                                } else {
                                    draft.items.push(validatedData)
                                }
                            })
                        }
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
