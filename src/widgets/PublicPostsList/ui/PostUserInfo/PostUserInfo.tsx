import {PublicPostsTypeItems} from '@/widgets/PublicPostsList/api/publicPosts.type'
import {Avatar, BlockedIcon, IconButton} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostUserInfoStyled} from './PostUserInfo.styled'

type PostUserInfoType = Pick<PublicPostsTypeItems, 'avatarOwner' | 'userName'>

export const PostUserInfo = ({avatarOwner, userName}: PostUserInfoType) => {
    return (
        <PostUserInfoStyled>
            <Avatar alt={`${userName} avatar`} src={avatarOwner} userName={userName} />
            <Link href={'/'}>{userName}</Link>
        </PostUserInfoStyled>
    )
}
