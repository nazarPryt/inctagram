import {useUpdateMessageStatus} from '@/features/Messenger/UpdateMessageStatus/hook/useUpdateMessageStatus'
import {AnimatePresence} from 'framer-motion'

import {MessageType} from '../../helpers/Chat.schema'
import {EmptyChatMessagesList} from '../../ui/EmptyChatMessagesList'
import {Message} from '../Message'
import {ChatMessagesListStyled} from './ChatMessagesList.styled'
import {ChatMessagesListSkeleton} from './ChatMessagesListSkeleton'

type PropsType = {
    isLoading: boolean
    messages: MessageType[]
}
export const ChatMessagesList = ({isLoading, messages}: PropsType) => {
    useUpdateMessageStatus({messages})

    if (isLoading) {
        return <ChatMessagesListSkeleton />
    }
    if (!messages.length) {
        return <EmptyChatMessagesList />
    }

    return (
        <ChatMessagesListStyled>
            <AnimatePresence initial={false}>
                {messages.map(message => {
                    return <Message key={message.id} message={message} />
                })}
            </AnimatePresence>
        </ChatMessagesListStyled>
    )
}
