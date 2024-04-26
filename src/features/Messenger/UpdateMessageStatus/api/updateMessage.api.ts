import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {RootState} from '@/_app/Store/store'
import {chatAPI} from '@/entities/Messenger/Chat/api/chat.api'
import {GetChatType} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {useAppSelector} from '@/shared/hooks/reduxHooks'

import {UpdateMessageType} from './updateMessage.type'

export const updateMessageApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        updateMessageStatus: build.mutation<void, UpdateMessageType>({
            async onQueryStarted(body, {dispatch, getState, queryFulfilled}) {
                const state = getState() as RootState
                const selectedChatId = state.messenger.selectedChatId

                console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++ onQueryStarted')

                const patchResult = dispatch(
                    chatAPI.util.updateQueryData('getChatMessages', selectedChatId, (draft: GetChatType) => {
                        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++ dispatch')
                        body.ids.forEach(id => {
                            draft.items.map(message => (message.id === id ? (message.status = 'READ') : message))
                        })
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            },
            query: body => ({
                body,
                method: 'PUT',
                url: `messanger`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useUpdateMessageStatusMutation} = updateMessageApi
