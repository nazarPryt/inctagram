import {Chat} from '@/features/Messenger/chat/Chat'
import {List} from '@/features/Messenger/list/List'

import {MessengerStyled} from './Messenger.styled'

export const Messenger = () => {
    return (
        <MessengerStyled>
            <h3>Messenger</h3>
            <div className={'wrapper'}>
                {/*<ChatUsersList />*/}
                {/*<Chat />*/}
                <List />
                <Chat />
            </div>
        </MessengerStyled>
    )
}
