import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'

import {GetChatSchema} from '../helpers/Chat.schema'

//https://redux-toolkit.js.org/rtk-query/usage/streaming-updates

export const chatAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getChatMessages: build.query({
            async onCacheEntryAdded(arg, {cacheDataLoaded, cacheEntryRemoved, getState, updateCachedData}) {
                try {
                    await cacheDataLoaded
                    WebSocketApi.socket?.on(SocketEvents.RECEIVE_MESSAGE, response => {
                        updateCachedData(draft => {
                            draft.items.push(response)
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
                return GetChatSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetChatMessagesQuery} = chatAPI
