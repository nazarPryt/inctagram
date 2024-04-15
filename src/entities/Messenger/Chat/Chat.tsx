import {useState} from 'react'

import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'
import {useGetChatMessagesQuery} from '@/entities/Messenger/Chat/api/chat.api'
import {ChatMessagesList} from '@/entities/Messenger/Chat/ui/ChatMessagesList'
import {EmojiIcon} from '@/public/EmojiIcon'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useAuth} from '@/shared/hooks/useAuth'
import {Avatar, Button, IconButton, InputText} from '@nazar-pryt/inctagram-ui-kit'
import EmojiPicker, {EmojiClickData, Theme} from 'emoji-picker-react'

import {ChatStyled} from './Chat.styled'

export const Chat = () => {
    const theme = useAppSelector(store => store.app.theme)
    const selectedChatId = useAppSelector(store => store.messenger.selectedChatId)

    console.log('selectedChatId: ', selectedChatId)
    const {data, isLoading} = useGetChatMessagesQuery(selectedChatId, {skip: !selectedChatId})
    const messages = data ? data.items ?? [] : []

    console.log('messages: ', messages)

    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const {userId} = useAuth()

    const handleEmoji = (e: EmojiClickData) => {
        setText(prev => prev + e.emoji)
        setOpen(false)
    }
    const newMessage = {
        message: 'some message text',
        receiverId: 253,
        // userId: 7,
    }

    const handleSend = () => {
        console.log('handleSend')
        WebSocketApi.socket?.emit(SocketEvents.RECEIVE_MESSAGE, newMessage, (response: any) => {
            console.log('SocketEvents.MESSAGE_SENT', response)
        })
        WebSocketApi.socket?.emit(SocketEvents.RECEIVE_MESSAGE, newMessage)
    }
    const handleOpenEmoji = () => {
        setOpen(prev => !prev)
    }
    const handleInputChange = (e: any) => {
        setText(e.target.value)
    }
    const empty = 'sdsd'

    if (!empty) {
        return <div>Select a chat to start messaging</div>
    }

    return (
        <ChatStyled>
            <div className={'chatInfo'}>
                <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                <h5>Ekaterina Ivanova</h5>
            </div>

            <ChatMessagesList isLoading={isLoading} messages={messages} />

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
