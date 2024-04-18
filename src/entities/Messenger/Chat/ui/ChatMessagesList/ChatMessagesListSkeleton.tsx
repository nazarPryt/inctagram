import {MessageSkeleton} from '../../ui/Message/MessageSkeleton'
import {ChatMessagesListStyled} from './ChatMessagesList.styled'

export const ChatMessagesListSkeleton = () => {
    return (
        <ChatMessagesListStyled>
            <MessageSkeleton owner />
            <MessageSkeleton />
            <MessageSkeleton owner />
            <MessageSkeleton />
            <MessageSkeleton owner />
            <MessageSkeleton owner />
        </ChatMessagesListStyled>
    )
}
