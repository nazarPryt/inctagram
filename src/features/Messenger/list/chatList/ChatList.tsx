import {useState} from 'react'

import {AddUser} from '@/features/Messenger/list/chatList/addUser/addUser'
import {ChatListStyled} from '@/features/Messenger/list/chatList/chatList.styled'

export const ChatList = () => {
    const [chats, setChats] = useState([])
    const [addMode, setAddMode] = useState(false)
    const [input, setInput] = useState('')

    const handleSelect = () => {
        console.log('handleSelect')
    }

    return (
        <ChatListStyled>
            <div className={'search'}>
                <div className={'searchBar'}>
                    <img alt={''} src={'./search.png'} />
                    <input onChange={e => setInput(e.target.value)} placeholder={'Search'} type={'text'} />
                </div>
                <img
                    alt={''}
                    className={'add'}
                    onClick={() => setAddMode(prev => !prev)}
                    src={addMode ? './minus.png' : './plus.png'}
                />
            </div>

            <div className={'item'} onClick={() => handleSelect()}>
                <img alt={''} src={'https://loremflickr.com/48/48'} />
                <div className={'texts'}>
                    <span>{'user.username'}</span>
                    <p>{'chat.lastMessage'}</p>
                </div>
            </div>

            {addMode && <AddUser />}
        </ChatListStyled>
    )
}
