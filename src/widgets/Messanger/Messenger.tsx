import {useState} from 'react'

import {AllChats} from '@/entities/Messenger/AllChats'
import {Chat} from '@/entities/Messenger/Chat'
import {useScreenDetector} from '@/shared/hooks/useScreenDetector'

import {MessengerStyled} from './Messenger.styled'

export const Messenger = () => {
    const [showChat, setShowChat] = useState(false)
    const {isMobile} = useScreenDetector()

    return (
        <MessengerStyled>
            <h3>Messenger</h3>
            <div className={'wrapper'}>
                {isMobile && (!showChat ? <AllChats setShowChat={setShowChat} /> : <Chat setShowChat={setShowChat} />)}
                {!isMobile && (
                    <>
                        <AllChats setShowChat={setShowChat} />
                        <Chat setShowChat={setShowChat} />
                    </>
                )}
            </div>
        </MessengerStyled>
    )
}
