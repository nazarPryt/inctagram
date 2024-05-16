import {useRef} from 'react'

import {MessageType} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {MessageStatus} from '@/entities/Messenger/Chat/ui/MessageStatus'
import {useGetPublicProfile} from '@/entities/Profile/PublicProfile/hook/useGetPublicProfile'
import {useDeleteMessage} from '@/features/Messenger/DeleteChatMessage/hook/useDeleteMessage'
import {DeletePostIcon} from '@/features/Post/DeletePost/ui/icon/DeletePostIcon'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useAuth} from '@/shared/hooks/useAuth'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'
import {Avatar, IconButton} from '@nazar-pryt/inctagram-ui-kit'

import {MessageStyled} from './Message.styled'

type PropType = {
    message: MessageType
}

export const Message = ({message}: PropType) => {
    const dialoguePartnerId = useAppSelector(store => store.messengerParams.dialoguePartnerId)

    const {avatarUrl, userName} = useGetPublicProfile(dialoguePartnerId)

    const {handleDeleteMessage} = useDeleteMessage(message.id)

    const {userId} = useAuth()

    const ref = useRef<HTMLDivElement | null>(null)

    const owner = message.ownerId === userId

    return (
        <MessageStyled $owner={owner} ref={ref}>
            {owner && <MessageStatus status={message.status} />}
            {owner && (
                <IconButton onClick={handleDeleteMessage}>
                    <DeletePostIcon />
                </IconButton>
            )}
            {!owner && (
                <div className={'avatar'}>
                    <Avatar size={48} src={avatarUrl} userName={userName} />
                </div>
            )}
            <div className={'messageContent'}>
                <p>{message.messageText}</p>
                <span>{toTimeAgo(message.updatedAt)}</span>
            </div>
        </MessageStyled>
    )
}
