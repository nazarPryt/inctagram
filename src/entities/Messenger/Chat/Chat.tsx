import {useGetChatMessagesQuery} from '@/entities/Messenger/Chat/api/chat.api'
import {ChatMessagesList} from '@/entities/Messenger/Chat/ui/ChatMessagesList'
import {SendMessageForm} from '@/features/Messenger/SendChatMessage/ui/SendMessageForm'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useAuth} from '@/shared/hooks/useAuth'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {ChatStyled} from './Chat.styled'

export const Chat = () => {
    const selectedChatId = useAppSelector(store => store.messenger.selectedChatId)

    const {data, isLoading} = useGetChatMessagesQuery(selectedChatId, {skip: !selectedChatId})
    const messages = data ? data.items ?? [] : []

    const {userId} = useAuth()

    if (!selectedChatId) {
        return <div>Select a chat to start messaging</div>
    }

    return (
        <ChatStyled>
            <div className={'chatInfo'}>
                <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                <h5>Ekaterina Ivanova</h5>
            </div>

            <ChatMessagesList isLoading={isLoading} messages={messages} />

            <SendMessageForm />
        </ChatStyled>
    )
}
