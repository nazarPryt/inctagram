import {MessageType} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {useAuth} from '@/shared/hooks/useAuth'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {MessageStyled} from './Message.styled'

type PropType = {
    message: MessageType
}
export const Message = ({message}: PropType) => {
    const {userId} = useAuth()
    const owner = message.receiverId === userId

    return (
        <MessageStyled $owner={owner}>
            <div className={'messageInfo'}>
                <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                <span>{toTimeAgo(message.updatedAt)}</span>
            </div>
            <div className={'messageContent'}>
                <p>{message.messageText}</p>
            </div>
        </MessageStyled>
    )
}
