import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {ChatMessagesListSkeletonStyled} from './ChatMessagesListSkeleton.styled'

export const ChatMessagesListSkeleton = () => {
    return (
        <ChatMessagesListSkeletonStyled>
            <Skeleton height={400} width={400} />
        </ChatMessagesListSkeletonStyled>
    )
}
