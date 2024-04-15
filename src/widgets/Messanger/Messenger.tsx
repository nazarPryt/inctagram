import {AllChats} from '@/entities/Messenger/AllChats'
import {Chat} from '@/entities/Messenger/Chat'

import {MessengerStyled} from './Messenger.styled'

export const Messenger = () => {
    return (
        <MessengerStyled>
            <h3>Messenger</h3>
            <div className={'wrapper'}>
                <AllChats />
                <Chat />
            </div>
        </MessengerStyled>
    )
}
