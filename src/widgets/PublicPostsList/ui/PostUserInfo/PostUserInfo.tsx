import {PATH} from '@/shared/constants/PATH'
import {PublicPostsTypeItems} from '@/widgets/PublicPostsList/api/publicPosts.type'
import {Avatar, BlockedIcon, IconButton} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostUserInfoStyled} from './PostUserInfo.styled'

type PostUserInfoType = Pick<PublicPostsTypeItems, 'avatarOwner' | 'ownerId' | 'userName'>

export const PostUserInfo = ({avatarOwner, ownerId, userName}: PostUserInfoType) => {
    return (
        <PostUserInfoStyled>
            <Avatar alt={`${userName} avatar`} src={avatarOwner} userName={userName} />
            <Link href={`${PATH.PUBLIC.PROFILE}/${ownerId}`}>{userName}</Link>
        </PostUserInfoStyled>
    )
}
