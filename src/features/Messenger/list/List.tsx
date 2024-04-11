import {ChatList} from '@/features/Messenger/list/chatList/ChatList'
import {ListStyled} from '@/features/Messenger/list/list.styled'
import {Userinfo} from '@/features/Messenger/list/userInfo/Userinfo'

export const List = () => {
    return (
        <ListStyled>
            <Userinfo />
            <ChatList />
        </ListStyled>
    )
}
