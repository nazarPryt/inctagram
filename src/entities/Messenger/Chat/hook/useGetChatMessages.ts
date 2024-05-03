import {SetMessageCursorAC} from '@/_app/Store/slices/messengerSlice'
import {useGetChatMessagesQuery} from '@/entities/Messenger/Chat/api/chat.api'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {filterAllParams} from '@/shared/utils/FilterParams/filterParams'

export const useGetChatMessages = () => {
    const dispatch = useAppDispatch()
    const messengerParams = useAppSelector(store => store.messengerParams)
    const filteredParams = filterAllParams(messengerParams)

    // @ts-ignore
    const {currentData, data, isLoading} = useGetChatMessagesQuery(filteredParams, {
        // refetchOnMountOrArgChange: true,
        skip: !messengerParams.dialoguePartnerId,
    })
    const messages = data ? data.items ?? [] : []
    const totalCount = currentData ? currentData.totalCount : 0

    // if (data && currentData) {
    const isHavePosts = !!(data && data.items.length)
    const hasMore = totalCount > messages.length

    const fetchMoreData = () => {
        const lastMessageId = isHavePosts ? data.items[data.items.length - 1].id : null

        console.log('lastMessageId', lastMessageId)
        dispatch(SetMessageCursorAC(lastMessageId))
    }

    return {fetchMoreData, hasMore, isHavePosts, isLoading, messages}
    // }
    // else {
    //     return {fetchMoreData: () => {}, hasMore: false, isHavePosts: false, isLoading, messages}
    // }

    // return {
    //     isLoading,
    //     messages,
    // }
}
