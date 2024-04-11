import {Chat} from '@/features/Messenger/ui/Chat/Chat'
import {ChatUsersList} from '@/features/Messenger/ui/ChatUsersList'

import {MessengerStyled} from './Messenger.styled'

export const Messenger = () => {
    return (
        <MessengerStyled>
            <h3>Messenger</h3>
            <div className={'wrapper'}>
                <ChatUsersList />
                <Chat />
            </div>
        </MessengerStyled>
    )
}
