import {GetAllChatsItemType} from '@/entities/Messenger/AllChats/helpers/getAllChatsSchema'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUserItemStyled} from './ChatUserItem.styled'

type PropsType = {
    chat: GetAllChatsItemType
}

export const ChatUserItem = ({chat}: PropsType) => {
    const avatarImg = chat.avatars.length ? chat.avatars[0].url : ''

    return (
        <ChatUserItemStyled>
            <Avatar size={48} src={avatarImg} />
            <div>
                <h5 className={'userName'}>{chat.userName}</h5>
                <p className={'lastMessage'}>{chat.messageText}</p>
            </div>
            <div>{toTimeAgo(chat.createdAt)}</div>
        </ChatUserItemStyled>
    )
}
