import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'
import {RootState} from '@/_app/Store/store'
import {ChatParamsTypes} from '@/entities/Messenger/Chat/api/chat.types'
import {z} from 'zod'

import {GetChatSchema, GetChatType, MessageSchema} from '../helpers/Chat.schema'

//https://redux-toolkit.js.org/rtk-query/usage/streaming-updates
//https://rohitbels.medium.com/pagination-infinite-loading-with-redux-toolkit-createapi-a265ac25c3bd
//https://stackoverflow.com/questions/70807077/implementing-infinite-scroll-on-top-when-scrolling-using-library-i-have-live-co

export const chatAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getChatMessages: build.query<GetChatType, number>({
            async onCacheEntryAdded(arg, {cacheDataLoaded, cacheEntryRemoved, updateCachedData}) {
                try {
                    WebSocketApi.socket?.on(SocketEvents.MESSAGE_SENT, (response, acknowledge) => {
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
                                    draft.items.unshift(validatedData)
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
                return GetChatSchema.parse(response)
            },
        }),
        getMoreChatMessages: build.query<GetChatType, ChatParamsTypes>({
            async onQueryStarted(arg, {dispatch, getState, queryFulfilled}) {
                const store = getState() as RootState
                const dialoguePartnerId = store.messengerParams.dialoguePartnerId

                try {
                    const response = await queryFulfilled

                    if (response.data.items.length > 0 && dialoguePartnerId) {
                        dispatch(
                            chatAPI.util.updateQueryData('getChatMessages', dialoguePartnerId, draft => {
                                Object.assign(draft.items, [...draft.items, ...response.data.items])
                            })
                        )
                    }
                } catch (err) {
                    console.log(err)
                }
            },
            query: params => ({
                method: 'GET',
                params,
                url: `messanger/${params.dialoguePartnerId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetChatMessagesQuery, useLazyGetMoreChatMessagesQuery} = chatAPI
