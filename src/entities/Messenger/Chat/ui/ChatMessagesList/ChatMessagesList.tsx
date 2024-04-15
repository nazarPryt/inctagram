import {Message} from '../Message'
import {ChatMessagesListStyled} from './ChatMessagesList.styled'

export const ChatMessagesList = () => {
    return (
        <ChatMessagesListStyled>
            <Message />
            <Message owner />
            <Message />
            <Message />
            <Message />
            <Message owner />
            <Message />
            <Message />
            <Message owner />
            <Message />
        </ChatMessagesListStyled>
    )
}
