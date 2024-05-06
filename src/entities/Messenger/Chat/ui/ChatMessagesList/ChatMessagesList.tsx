import InfiniteScroll from 'react-infinite-scroll-component'

import {useGetChatMessages} from '@/entities/Messenger/Chat/hook/useGetChatMessages'
import {PublicProfileType} from '@/entities/PublicProfile/helpers/publicProfile.schema'
import {useUpdateMessageStatus} from '@/features/Messenger/UpdateMessageStatus/hook/useUpdateMessageStatus'
import {AnimatePresence} from 'framer-motion'

import {EmptyChatMessagesList} from '../../ui/EmptyChatMessagesList'
import {Message} from '../Message'
import {ChatMessagesListStyled} from './ChatMessagesList.styled'
import {ChatMessagesListSkeleton} from './ChatMessagesListSkeleton'

export const ChatMessagesList = () => {
    const {fetchMoreData, hasMore, isLoading, messages} = useGetChatMessages()

    useUpdateMessageStatus({messages})

    if (isLoading) {
        return <ChatMessagesListSkeleton />
    }
    if (!messages.length) {
        return <EmptyChatMessagesList />
    }

    return (
        <ChatMessagesListStyled id={'scrollableDiv'}>
            <AnimatePresence initial={false}>
                <InfiniteScroll
                    className={'chatMessagesListInfiniteScroll'}
                    dataLength={messages.length}
                    hasMore={hasMore}
                    inverse
                    loader={<span />}
                    next={fetchMoreData}
                    scrollableTarget={'scrollableDiv'}
                >
                    {messages.map(message => {
                        return <Message key={message.id} message={message} />
                    })}
                </InfiniteScroll>
            </AnimatePresence>
        </ChatMessagesListStyled>
    )
}
