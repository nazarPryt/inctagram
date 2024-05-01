import {useEffect, useRef} from 'react'

import {MessageType} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {MessageStatus} from '@/entities/Messenger/Chat/ui/MessageStatus'
import {useDeleteMessage} from '@/features/Messenger/DeleteChatMessage/hook/useDeleteMessage'
import {DeletePostIcon} from '@/features/Post/DeletePost/ui/icon/DeletePostIcon'
import {useAuth} from '@/shared/hooks/useAuth'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'
import {Avatar, IconButton} from '@nazar-pryt/inctagram-ui-kit'
import {Variants} from 'framer-motion'

import {MessageStyled} from './Message.styled'

type PropType = {
    message: MessageType
}
const MessageVariant: Variants = {
    exit: {
        opacity: 0,
        transition: {duration: 0.3},
        x: 100,
    },
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, transition: {ease: 'backIn'}, y: 0},
}

export const Message = ({message}: PropType) => {
    const {handleDeleteMessage} = useDeleteMessage()
    const {userId} = useAuth()

    const ref = useRef<HTMLDivElement | null>(null)
    const owner = message.ownerId === userId

    useEffect(() => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [message])

    return (
        <MessageStyled
            $owner={owner}
            animate={'visible'}
            exit={'exit'}
            initial={'hidden'}
            layout
            ref={ref}
            variants={MessageVariant}
        >
            {owner && <MessageStatus status={message.status} />}
            {owner && (
                <IconButton onClick={() => handleDeleteMessage(message.id)}>
                    <DeletePostIcon />
                </IconButton>
            )}
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
