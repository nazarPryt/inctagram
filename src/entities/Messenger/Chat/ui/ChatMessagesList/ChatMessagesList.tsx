import InfiniteScroll from 'react-infinite-scroll-component'

import {useGetChatMessages} from '@/entities/Messenger/Chat/hook/useGetChatMessages'
import {useUpdateMessageStatus} from '@/features/Messenger/UpdateMessageStatus/hook/useUpdateMessageStatus'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'
import {AnimatePresence} from 'framer-motion'

import {EmptyChatMessagesList} from '../../ui/EmptyChatMessagesList'
import {Message} from '../Message'
import {ChatMessagesListStyled} from './ChatMessagesList.styled'
import {ChatMessagesListSkeleton} from './ChatMessagesListSkeleton'

// type PropsType = {
//     dialoguePartnerId: number
// }
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
        <ChatMessagesListStyled
            id={'scrollableDiv'}
            style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                height: 300,
                // overflow: 'scroll',
            }}
        >
            <AnimatePresence initial={false}>
                <InfiniteScroll
                    dataLength={messages.length}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    hasMore={hasMore}
                    inverse
                    loader={<div>loader...</div>}
                    next={fetchMoreData}
                    pullDownToRefresh
                    pullDownToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8595;</h3>}
                    pullDownToRefreshThreshold={50}
                    refreshFunction={fetchMoreData}
                    releaseToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8593;</h3>}
                    scrollableTarget={'scrollableDiv'}
                    style={{display: 'flex', flexDirection: 'column-reverse'}} //To put endMessage and loader to the top.
                >
                    {messages.map(message => {
                        return <Message key={message.id} message={message} />
                    })}
                </InfiniteScroll>
            </AnimatePresence>
        </ChatMessagesListStyled>
    )
}
