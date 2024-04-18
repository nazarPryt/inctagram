import {MessageStatusType} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {CheckMessageIcon} from '@/public/CheckMessageIcon'

import {MessageStatusStyled} from './MessageStatus.styled'

type PropsType = {
    status: MessageStatusType
}
export const MessageStatus = ({status}: PropsType) => {
    return (
        <MessageStatusStyled $status={status}>
            <CheckMessageIcon />
        </MessageStatusStyled>
    )
}
