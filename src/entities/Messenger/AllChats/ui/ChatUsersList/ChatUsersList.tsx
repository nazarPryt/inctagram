import {SetStateAction} from 'react'

import {GetAllChatsItemType} from '@/entities/Messenger/AllChats/helpers/getAllChatsSchema'
import {ChatUserItem} from '@/entities/Messenger/AllChats/ui/ChatUserItem'
import {ChatUserListSkeleton} from '@/entities/Messenger/AllChats/ui/ChatUsersListSkeleton'
import {EmptyChatUsersList} from '@/entities/Messenger/AllChats/ui/EmptyChatUsersList'

import {ChatUsersListStyled} from './ChatUsersList.styled'

type PropsType = {
    chats: GetAllChatsItemType[]
    isLoading: boolean

    setShowChat?: (value: SetStateAction<boolean>) => void
}

export const ChatUsersList = ({chats, isLoading, setShowChat}: PropsType) => {
    if (isLoading) {
        return <ChatUserListSkeleton />
    }
    if (!chats.length) {
        return <EmptyChatUsersList />
    }

    return (
        <ChatUsersListStyled>
            {chats.map(chat => {
                return <ChatUserItem chat={chat} key={chat.id} setShowChat={setShowChat} />
            })}
        </ChatUsersListStyled>
    )
}
