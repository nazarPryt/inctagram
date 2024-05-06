import {useEffect} from 'react'

import {SetMessageCursorAC} from '@/_app/Store/slices/messengerSlice'
import {chatAPI, useGetChatMessagesQuery} from '@/entities/Messenger/Chat/api/chat.api'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {filterAllParams} from '@/shared/utils/FilterParams/filterParams'

export const useGetChatMessages = () => {
    const dispatch = useAppDispatch()
    const dialoguePartnerId = useAppSelector(store => store.messengerParams.dialoguePartnerId)
    const cursor = useAppSelector(store => store.messengerParams.cursor)

    const {currentData, data, isLoading} = useGetChatMessagesQuery(dialoguePartnerId!, {
        skip: !dialoguePartnerId,
    })
    const messages = data ? data.items ?? [] : []
    const totalCount = currentData ? currentData.totalCount : 0

    const isHavePosts = !!(data && data.items.length)
    const hasMore = totalCount > messages.length

    const fetchMoreData = () => {
        const lastMessageId = isHavePosts ? data.items[data.items.length - 1].id : null

        dispatch(SetMessageCursorAC(lastMessageId))
    }

    useEffect(() => {
        if (cursor) {
            dispatch(
                chatAPI.endpoints.getMoreChatMessages.initiate({
                    cursor,
                    dialoguePartnerId,
                })
            )
        }
    }, [dialoguePartnerId, cursor, dispatch])

    return {fetchMoreData, hasMore, isHavePosts, isLoading, messages}
}
