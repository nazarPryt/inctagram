import {ChatUser} from '@/features/Messenger/ui/ChatUser'
import {Avatar, InputText} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUsersListStyled} from './ChatUsersListStyled'

export const ChatUsersList = () => {
    return (
        <ChatUsersListStyled>
            <InputText placeholder={'Search user'} search value={''} />
            <div className={'box'}>
                <ChatUser />
                <ChatUser />
                <ChatUser />
            </div>
        </ChatUsersListStyled>
    )
}
