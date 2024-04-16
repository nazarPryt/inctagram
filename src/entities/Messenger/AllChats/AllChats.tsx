import {useGetAllChatsQuery} from '@/entities/Messenger/AllChats/api/allChats.api'
import {ChatUsersList} from '@/entities/Messenger/AllChats/ui/ChatUsersList'
import {InputText} from '@nazar-pryt/inctagram-ui-kit'

import {AllChatsStyled} from './AllChats.styled'

export const AllChats = () => {
    const {data, isLoading} = useGetAllChatsQuery({})
    const chats = data ? data.items ?? [] : []

    return (
        <AllChatsStyled>
            <InputText placeholder={'Search chats...'} search value={''} />
            <ChatUsersList chats={chats} isLoading={isLoading} />
        </AllChatsStyled>
    )
}
