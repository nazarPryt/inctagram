import {SetStateAction} from 'react'

import {SetDialoguePartnerIdAC, SetMessageCursorAC} from '@/_app/Store/slices/messengerSlice'
import {GetAllChatsItemType} from '@/entities/Messenger/AllChats/helpers/getAllChatsSchema'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {useAuth} from '@/shared/hooks/useAuth'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUserItemStyled} from './ChatUserItem.styled'

type PropsType = {
    chat: GetAllChatsItemType
    setShowChat?: (value: SetStateAction<boolean>) => void
}

export const ChatUserItem = ({chat, setShowChat}: PropsType) => {
    const dispatch = useAppDispatch()
    const dialoguePartnerId = useAppSelector(store => store.messengerParams.dialoguePartnerId)
    const {userId} = useAuth()

    const isSelected = chat.receiverId === dialoguePartnerId
    const avatarImg = chat.avatars.length ? chat.avatars[0].url : ''

    const handleClick = () => {
        setShowChat && setShowChat(true)
        dispatch(SetDialoguePartnerIdAC(userId === chat.ownerId ? chat.receiverId : chat.ownerId))
    }

    return (
        <ChatUserItemStyled $selected={isSelected} onClick={handleClick}>
            <div className={'box'}>
                <div>
                    <Avatar size={48} src={avatarImg} userName={chat.userName} />
                </div>
                <div>
                    <h5 className={'userName'}>{chat.userName}</h5>
                    <p className={'lastMessage'}>{chat.messageText}</p>
                </div>
            </div>
            <div className={'createdAt'}>{toTimeAgo(chat.createdAt)}</div>
        </ChatUserItemStyled>
    )
}
