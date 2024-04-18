import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {MessageStyled} from './Message.styled'

type PropsType = {
    owner?: boolean
}
export const MessageSkeleton = ({owner}: PropsType) => {
    return (
        <MessageStyled $owner={owner}>
            {!owner && (
                <div className={'avatar'}>
                    <Skeleton circle height={48} width={48} />
                </div>
            )}
            <div className={'messageContent'}>
                <Skeleton height={40} width={300} />
                <Skeleton height={10} width={60} />
            </div>
        </MessageStyled>
    )
}
