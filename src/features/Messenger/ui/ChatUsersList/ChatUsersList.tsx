import {useGetAllChatsQuery} from '@/features/Messenger/api/messenger.api'
import {ChatUser} from '@/features/Messenger/ui/ChatUser'
import {ChatUserListSkeleton} from '@/features/Messenger/ui/ChatUserSkeleton'
import {InputText} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUsersListStyled} from './ChatUsersListStyled'

export const ChatUsersList = () => {
    const {data, isLoading} = useGetAllChatsQuery({})
    const chats = data ? data.items ?? [] : []

    return (
        <ChatUsersListStyled>
            <InputText placeholder={'Search user'} search value={''} />
            <div className={'box'}>
                {isLoading && <ChatUserListSkeleton />}
                {chats.map(chat => {
                    return <ChatUser chat={chat} key={chat.id} />
                })}
            </div>
        </ChatUsersListStyled>
    )
}
