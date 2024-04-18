import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUserInfoStyled} from './ChatUserInfo.styled'

export const ChatUserInfoSkeleton = () => {
    return (
        <ChatUserInfoStyled>
            <div>
                <Skeleton circle height={48} width={48} />
            </div>
            <Skeleton height={20} width={100} />
        </ChatUserInfoStyled>
    )
}
