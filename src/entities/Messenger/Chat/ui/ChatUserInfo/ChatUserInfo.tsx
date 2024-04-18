import {PATH} from '@/_app/AppSettings'
import {useGetPublicProfileQuery} from '@/entities/PublicProfile/api/publicProfile.api'
import {Avatar, Skeleton} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {ChatUserInfoStyled} from './ChatUserInfo.styled'

export const ChatUserInfo = ({userId}: {userId: number}) => {
    const {data, isLoading} = useGetPublicProfileQuery(userId, {
        refetchOnMountOrArgChange: true,
        skip: !userId,
    })

    if (isLoading) {
        return (
            <div>
                <Skeleton height={50} width={100} />
            </div>
        )
    }
    if (data) {
        const avatarUrl = data.avatars.length ? data.avatars[0].url : ''

        return (
            <ChatUserInfoStyled>
                <Avatar size={48} src={avatarUrl} userName={data.userName} />
                <Link href={`${PATH.USER_PROFILE}/${userId}`}>{data.userName}</Link>
            </ChatUserInfoStyled>
        )
    }

    return null
}
