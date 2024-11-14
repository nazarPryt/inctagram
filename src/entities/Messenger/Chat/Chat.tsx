import {SetStateAction} from 'react'

import {ChatIsNotSelected} from '@/entities/Messenger/Chat/ui/ChatIsNotSelected'
import {ChatMessagesList} from '@/entities/Messenger/Chat/ui/ChatMessagesList'
import {ChatUserInfo} from '@/entities/Messenger/Chat/ui/ChatUserInfo/ChatUserInfo'
import {SendMessageForm} from '@/features/Messenger/SendChatMessage/ui/SendMessageForm'
import {useAppSelector} from '@/shared/hooks/reduxHooks'

import {ChatStyled} from './Chat.styled'

type Props = {
    setShowChat?: (value: SetStateAction<boolean>) => void
}
export const Chat = ({setShowChat}: Props) => {
    const dialoguePartnerId = useAppSelector(store => store.messengerParams.dialoguePartnerId)

    if (!dialoguePartnerId) {
        return <ChatIsNotSelected />
    }

    return (
        <ChatStyled>
            <ChatUserInfo dialoguePartnerId={dialoguePartnerId} setShowChat={setShowChat} />

            <ChatMessagesList />

            <SendMessageForm />
        </ChatStyled>
    )
}
