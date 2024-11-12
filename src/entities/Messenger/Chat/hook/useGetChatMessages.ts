import {SetMessageCursorAC} from '@/_app/Store/slices/messengerSlice'
import {useGetChatMessagesQuery, useLazyGetMoreChatMessagesQuery} from '@/entities/Messenger/Chat/api/chat.api'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'

export const useGetChatMessages = () => {
    const dispatch = useAppDispatch()
    const dialoguePartnerId = useAppSelector(store => store.messengerParams.dialoguePartnerId)

    const {currentData, data, isLoading} = useGetChatMessagesQuery(dialoguePartnerId!, {
        skip: !dialoguePartnerId,
    })
    const [getMoreMessages] = useLazyGetMoreChatMessagesQuery()
    const messages = data ? data.items ?? [] : []
    const totalCount = currentData ? currentData.totalCount : 0

    const isHaveMessages = !!(data && data.items.length)
    const hasMore = totalCount > messages.length

    const fetchMoreData = () => {
        const lastMessageId = isHaveMessages ? data.items[data.items.length - 1].id : null

        dispatch(SetMessageCursorAC(lastMessageId))
        getMoreMessages({cursor: lastMessageId, dialoguePartnerId})
    }

    return {fetchMoreData, hasMore, isHaveMessages, isLoading, messages}
}
