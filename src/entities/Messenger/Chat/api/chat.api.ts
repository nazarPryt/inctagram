import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'
import {RootState} from '@/_app/Store/store'
import {ChatParamsTypes} from '@/entities/Messenger/Chat/api/chat.types'
import {z} from 'zod'

import {GetChatSchema, GetChatType, MessageSchema} from '../helpers/Chat.schema'

//https://redux-toolkit.js.org/rtk-query/usage/streaming-updates
//https://rohitbels.medium.com/pagination-infinite-loading-with-redux-toolkit-createapi-a265ac25c3bd

export const chatAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getChatMessages: build.query<GetChatType, ChatParamsTypes>({
            merge: (currentCache, newItems) => {
                if (currentCache.items.length) {
                    return {
                        ...currentCache,
                        ...newItems,
                        items: [...currentCache.items, ...newItems.items],
                    }
                }

                return newItems
            },
            async onCacheEntryAdded(arg, {cacheDataLoaded, cacheEntryRemoved, updateCachedData}) {
                try {
                    WebSocketApi.socket?.on(SocketEvents.MESSAGE_SENT, (response, acknowledge) => {
                        console.log('SocketEvents.MESSAGE_SENT', response)

                        const newMessage = MessageSchema.parse(response)

                        acknowledge({
                            messageId: newMessage.id,
                            status: 'RECEIVED',
                        })
                        updateCachedData((draft: GetChatType) => {
                            draft.items.unshift(newMessage)
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
            query: params => ({
                method: 'GET',
                params,
                url: `messanger/${params.dialoguePartnerId}`,
            }),
            serializeQueryArgs: ({queryArgs}) => {
                const newQueryArgs = {...queryArgs}

                if (newQueryArgs.cursor) {
                    delete newQueryArgs.cursor
                }

                return newQueryArgs
            },
            transformResponse: response => {
                const validatedResponse = GetChatSchema.parse(response)

                // validatedResponse.items.reverse()

                return validatedResponse
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetChatMessagesQuery} = chatAPI
