import {MessageType} from '../../helpers/Chat.schema'
import {ChatMessagesListSkeleton} from '../../ui/ChatMessagesListSkeleton'
import {EmptyChatMessagesList} from '../../ui/EmptyChatMessagesList'
import {Message} from '../Message'
import {ChatMessagesListStyled} from './ChatMessagesList.styled'

type PropsType = {
    isLoading: boolean
    messages: MessageType[]
}
export const ChatMessagesList = ({isLoading, messages}: PropsType) => {
    if (isLoading) {
        return <ChatMessagesListSkeleton />
    }
    if (!messages.length) {
        return <EmptyChatMessagesList />
    }

    return (
        <ChatMessagesListStyled>
            {messages.map(message => {
                return <Message key={message.id} message={message} />
            })}
        </ChatMessagesListStyled>
    )
}
