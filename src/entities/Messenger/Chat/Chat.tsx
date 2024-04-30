import {useGetChatMessagesQuery} from '@/entities/Messenger/Chat/api/chat.api'
import {ChatIsNotSelected} from '@/entities/Messenger/Chat/ui/ChatIsNotSelected'
import {ChatMessagesList} from '@/entities/Messenger/Chat/ui/ChatMessagesList'
import {ChatUserInfo} from '@/entities/Messenger/Chat/ui/ChatUserInfo/ChatUserInfo'
import {SendMessageForm} from '@/features/Messenger/SendChatMessage/ui/SendMessageForm'
import {useAppSelector} from '@/shared/hooks/reduxHooks'

import {ChatStyled} from './Chat.styled'

export const Chat = () => {
    const dialoguePartnerId = useAppSelector(store => store.messengerParams.dialoguePartnerId)

    const {data, isLoading} = useGetChatMessagesQuery(dialoguePartnerId, {
        refetchOnMountOrArgChange: true,
        skip: !dialoguePartnerId,
    })
    const messages = data ? data.items ?? [] : []

    if (!dialoguePartnerId) {
        return <ChatIsNotSelected />
    }

    return (
        <ChatStyled>
            <ChatUserInfo userId={dialoguePartnerId} />

            <ChatMessagesList isLoading={isLoading} messages={messages} />

            <SendMessageForm />
        </ChatStyled>
    )
}
