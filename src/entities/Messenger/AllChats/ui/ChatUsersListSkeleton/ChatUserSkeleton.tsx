import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {ChatUserItemStyled} from '../../ui/ChatUserItem/ChatUserItem.styled'

export const ChatUserSkeleton = () => {
    return (
        <ChatUserItemStyled>
            <div>
                <Skeleton circle height={48} width={48} />
            </div>
            <div>
                <Skeleton height={20} width={100} />
                <Skeleton height={10} width={80} />
            </div>
            <div>
                <Skeleton height={10} width={30} />
            </div>
        </ChatUserItemStyled>
    )
}
export const ChatUserListSkeleton = () => {
    return (
        <div>
            <ChatUserSkeleton />
            <ChatUserSkeleton />
            <ChatUserSkeleton />
            <ChatUserSkeleton />
        </div>
    )
}
