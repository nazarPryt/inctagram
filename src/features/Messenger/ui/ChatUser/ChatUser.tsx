import {ChatType} from '@/features/Messenger/helpers/allChats.schema'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUserStyled} from './ChatUser.styled'

type PropsType = {
    chat: ChatType
}

export const ChatUser = ({chat}: PropsType) => {
    const avatarImg = chat.avatars.length ? chat.avatars[0].url : ''

    return (
        <ChatUserStyled>
            <Avatar size={48} src={avatarImg} />
            <div>
                <h5 className={'userName'}>{chat.userName}</h5>
                <p className={'lastMessage'}>{chat.messageText}</p>
            </div>
            <div>{toTimeAgo(chat.createdAt)}</div>
        </ChatUserStyled>
    )
}
