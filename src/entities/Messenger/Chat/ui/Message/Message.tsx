import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {MessageStyled} from './Message.styled'

type PropType = {
    owner?: boolean
}
export const Message = ({owner}: PropType) => {
    return (
        <MessageStyled $owner={owner}>
            <div className={'messageInfo'}>
                <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                <span>just now</span>
            </div>
            <div className={'messageContent'}>
                <p>hello</p>
            </div>
        </MessageStyled>
    )
}
