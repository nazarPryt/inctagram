import {useEffect, useRef, useState} from 'react'

import {ChatStyled} from '@/features/Messenger/chat/Chat.styled'
import EmojiPicker from 'emoji-picker-react'

export const Chat = () => {
    const [chat, setChat] = useState()
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const [img, setImg] = useState({
        file: null,
        url: '',
    })

    const endRef = useRef(null)

    const handleEmoji = (e: any) => {
        setText(prev => prev + e.emoji)
        setOpen(false)
    }

    const handleImg = (e: any) => {
        if (e.target.files[0]) {
            setImg({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            })
        }
    }

    const handleSend = () => {
        console.log('handleSend')
    }

    return (
        <ChatStyled>
            <div className={'top'}>
                <div className={'user'}>
                    <img alt={''} src={'https://loremflickr.com/48/48'} />
                    <div className={'texts'}>
                        <span>{'user?.username'}</span>
                        <p>Lorem ipsum dolor, sit amet.</p>
                    </div>
                </div>
                <div className={'icons'}>
                    <img alt={''} src={'./phone.png'} />
                    <img alt={''} src={'./video.png'} />
                    <img alt={''} src={'./info.png'} />
                </div>
            </div>
            <div className={'center'}>
                {[].map(message => (
                    <div className={'message own'} key={'ds'}>
                        <div className={'texts'}>
                            {/*{message.img && <img alt={''} src={message.img} />}*/}
                            <p>{'message.text'}</p>
                            <span>{'message.createdAt'}</span>
                        </div>
                    </div>
                ))}
                {img.url && (
                    <div className={'message own'}>
                        <div className={'texts'}>
                            <img alt={''} src={img.url} />
                        </div>
                    </div>
                )}
                <div ref={endRef}></div>
            </div>
            <div className={'bottom'}>
                <div className={'icons'}>
                    <label htmlFor={'file'}>
                        <img alt={''} src={'./img.png'} />
                    </label>
                    <input id={'file'} onChange={handleImg} style={{display: 'none'}} type={'file'} />
                    <img alt={''} src={'./camera.png'} />
                    <img alt={''} src={'./mic.png'} />
                </div>
                <input
                    onChange={e => setText(e.target.value)}
                    placeholder={'Type a message...'}
                    type={'text'}
                    value={text}
                />
                <div className={'emoji'}>
                    <img alt={''} onClick={() => setOpen(prev => !prev)} src={'./emoji.png'} />
                    <div className={'picker'}>
                        <EmojiPicker onEmojiClick={handleEmoji} open={open} />
                    </div>
                </div>
                <button className={'sendButton'} onClick={handleSend}>
                    Send
                </button>
            </div>
        </ChatStyled>
    )
}
