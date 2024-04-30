import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {RootState} from '@/_app/Store/store'
import {chatAPI} from '@/entities/Messenger/Chat/api/chat.api'
import {GetChatType} from '@/entities/Messenger/Chat/helpers/Chat.schema'

export const deleteMessageApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        deleteMessage: build.mutation<void, number>({
            // invalidatesTags: ['Messages'],
            async onQueryStarted(messageIdToDelete, {dispatch, getState, queryFulfilled}) {
                const state = getState() as RootState
                const selectedChatId = state.messenger.selectedChatId

                const patchResult = dispatch(
                    chatAPI.util.updateQueryData('getChatMessages', selectedChatId, (draft: GetChatType) => {
                        draft.items = draft.items.filter(message => message.id !== messageIdToDelete)
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            },
            query: id => ({
                method: 'DELETE',
                url: `messanger/${id}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useDeleteMessageMutation} = deleteMessageApi
