import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUserStyled} from './ChatUser.styled'

export const ChatUser = () => {
    return (
        <ChatUserStyled>
            <Avatar size={48} src={'https://loremflickr.com/48/48'} />
            <div>
                <h5 className={'userName'}>Ekaterina Ivanova</h5>
                <p className={'lastMessage'}>Ahahahah, just kidding..</p>
            </div>
            <div>17:33</div>
        </ChatUserStyled>
    )
}
