import {SetSelectedChatIdAC} from '@/_app/Store/slices/messengerSlice'
import {GetAllChatsItemType} from '@/entities/Messenger/AllChats/helpers/getAllChatsSchema'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUserItemStyled} from './ChatUserItem.styled'

type PropsType = {
    chat: GetAllChatsItemType
}

export const ChatUserItem = ({chat}: PropsType) => {
    const dispatch = useAppDispatch()
    const selectedChatId = useAppSelector(store => store.messenger.selectedChatId)

    const isSelected = chat.receiverId === selectedChatId
    const avatarImg = chat.avatars.length ? chat.avatars[0].url : ''

    const handleClick = () => {
        dispatch(SetSelectedChatIdAC(chat.receiverId))
    }

    return (
        <ChatUserItemStyled $selected={isSelected} onClick={handleClick}>
            <Avatar size={48} src={avatarImg} />
            <div>
                <h5 className={'userName'}>{chat.userName}</h5>
                <p className={'lastMessage'}>{chat.messageText}</p>
            </div>
            <div className={'createdAt'}>{toTimeAgo(chat.createdAt)}</div>
        </ChatUserItemStyled>
    )
}
