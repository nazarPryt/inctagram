import {rtkQuery} from '@/_app/Api/client/RTKQuery'
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
                    WebSocketApi.socket?.on(SocketEvents.MESSAGE_SENT, (response, acknowledge) => {
                        console.log('SocketEvents.MESSAGE_SENT', response)

                        const validatedData = MessageSchema.parse(response)

                        acknowledge({
                            messageId: validatedData.id,
                            status: 'RECEIVED',
                        })
                        updateCachedData((draft: GetChatType) => {
                            draft.items.push(validatedData)
                        })
                    })
                    WebSocketApi.socket?.on(SocketEvents.RECEIVE_MESSAGE, response => {
                        console.log('socket?.on(SocketEvents.RECEIVE_MESSAGE', response)

                        const arrayOfMessages = z.array(MessageSchema)

                        const validatedData =
                            response instanceof Array ? arrayOfMessages.parse(response) : MessageSchema.parse(response)

                        // Check the type of the validated data
                        if (Array.isArray(validatedData)) {
                            // Handle array logic
                            updateCachedData((draft: GetChatType) => {
                                for (let i = 0; i < validatedData.length; i++) {
                                    const indexToChange = draft.items.findIndex(
                                        message => message.id === validatedData[i].id
                                    )

                                    if (indexToChange !== -1) {
                                        draft.items[indexToChange].status = 'READ'
                                    }
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
                    await cacheDataLoaded
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
