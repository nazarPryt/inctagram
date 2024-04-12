import {useState} from 'react'

import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'
import {MessageType} from '@/features/Messenger/helpers/Message.schema'
import {Message} from '@/features/Messenger/ui/Message'
import {EmojiIcon} from '@/public/EmojiIcon'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useAuth} from '@/shared/hooks/useAuth'
import {Avatar, Button, IconButton, InputText} from '@nazar-pryt/inctagram-ui-kit'
import EmojiPicker, {EmojiClickData, Theme} from 'emoji-picker-react'

import {ChatStyled} from './Chat.styled'

export const Chat = () => {
    const theme = useAppSelector(store => store.app.theme)
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const {userId} = useAuth()
    const handleEmoji = (e: EmojiClickData) => {
        setText(prev => prev + e.emoji)
        setOpen(false)
    }
    const newMessage: MessageType = {
        createdAt: 'ds',
        id: 222,
        messageText: 'some message text',
        messageType: 'string',
        ownerId: userId,
        receiverId: 3,
        status: 'SENT',
        updatedAt: 'sd',
    }

    const handleSend = () => {
        console.log('handleSend')
        WebSocketApi.socket?.send(SocketEvents.RECEIVE_MESSAGE, newMessage, (response: any) => {
            console.log('SocketEvents.MESSAGE_SENT', response)
        })
    }
    const handleOpenEmoji = () => {
        setOpen(prev => !prev)
    }
    const handleInputChange = (e: any) => {
        setText(e.target.value)
    }

    return (
        <ChatStyled>
            <div className={'chatInfo'}>
                <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                <h5>Ekaterina Ivanova</h5>
            </div>
            <div className={'chat'}>
                <Message />
                <Message owner />
                <Message />
                <Message />
                <Message />
                <Message owner />
                <Message />
                <Message />
                <Message owner />
                <Message />
            </div>
            <form>
                <InputText onChange={handleInputChange} placeholder={'Type a message...'} value={text} />
                <div className={'emoji'}>
                    <IconButton onClick={handleOpenEmoji}>
                        <EmojiIcon />
                    </IconButton>
                    <div className={'picker'}>
                        <EmojiPicker onEmojiClick={handleEmoji} open={open} theme={theme as Theme} />
                    </div>
                </div>
                <Button onClick={handleSend} type={'button'} variant={'outlined'}>
                    Send
                </Button>
            </form>
        </ChatStyled>
    )
}
