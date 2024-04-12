import {MessengerStyled} from './Messenger.styled'
import {Chat} from './ui/Chat'
import {ChatUsersList} from './ui/ChatUsersList'

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
