import {Message} from '@/features/Messenger/ui/Message'
import {Avatar, InputText} from '@nazar-pryt/inctagram-ui-kit'

import {ChatStyled} from './Chat.styled'

export const Chat = () => {
    return (
        <ChatStyled>
            <div className={'chatInfo'}>
                <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                <h5>Ekaterina Ivanova</h5>
            </div>
            <div className={'chat'}>
                <Message />
                <Message owner />
                <Message />
                <Message />
                <Message />
                <Message owner />
                <Message />
                <Message />
                <Message owner />
                <Message />
            </div>
            <div className={'inputBox'}>
                <InputText placeholder={'Type Message'} />
            </div>
        </ChatStyled>
    )
}
