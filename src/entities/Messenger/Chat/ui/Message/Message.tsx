import {MessageType} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {MessageStatus} from '@/entities/Messenger/Chat/ui/MessageStatus'
import {useAuth} from '@/shared/hooks/useAuth'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {MessageStyled} from './Message.styled'

type PropType = {
    message: MessageType
}
export const Message = ({message}: PropType) => {
    const {userId} = useAuth()

    const owner = message.ownerId === userId

    return (
        <MessageStyled $owner={owner}>
            {owner && <MessageStatus status={message.status} />}
            {!owner && (
                <div className={'avatar'}>
                    <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                </div>
            )}
            <div className={'messageContent'}>
                <p>{message.messageText}</p>
                <span>{toTimeAgo(message.updatedAt)}</span>
            </div>
        </MessageStyled>
    )
}
