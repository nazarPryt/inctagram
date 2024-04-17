import {useGetChatMessagesQuery} from '@/entities/Messenger/Chat/api/chat.api'
import {ChatMessagesList} from '@/entities/Messenger/Chat/ui/ChatMessagesList'
import {ChatUserInfo} from '@/entities/Messenger/Chat/ui/ChatUserInfo/ChatUserInfo'
import {EmptyChatMessagesList} from '@/entities/Messenger/Chat/ui/EmptyChatMessagesList'
import {SendMessageForm} from '@/features/Messenger/SendChatMessage/ui/SendMessageForm'
import {useAppSelector} from '@/shared/hooks/reduxHooks'

import {ChatStyled} from './Chat.styled'

export const Chat = () => {
    const selectedChatId = useAppSelector(store => store.messenger.selectedChatId)

    const {data, isLoading} = useGetChatMessagesQuery(selectedChatId, {
        refetchOnMountOrArgChange: true,
        skip: !selectedChatId,
    })
    const messages = data ? data.items ?? [] : []

    if (!selectedChatId) {
        return <EmptyChatMessagesList />
    }

    return (
        <ChatStyled>
            <ChatUserInfo userId={selectedChatId} />

            <ChatMessagesList isLoading={isLoading} messages={messages} />

            <SendMessageForm />
        </ChatStyled>
    )
}
