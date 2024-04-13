import {ChatUserStyled} from '@/features/Messenger/ui/ChatUser/ChatUser.styled'
import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

export const ChatUserSkeleton = () => {
    return (
        <ChatUserStyled>
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
        </ChatUserStyled>
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
