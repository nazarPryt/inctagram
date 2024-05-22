import {PATH} from '@/_app/AppSettings/PATH'
import {AllPostsItemType} from '@/entities/Post/helpers/AllPosts.schema'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostUserInfoStyled} from './PostUserInfo.styled'

type PostUserInfoType = Pick<AllPostsItemType, 'avatarOwner' | 'ownerId' | 'userName'>

export const PostUserInfo = ({avatarOwner, ownerId, userName}: PostUserInfoType) => {
    return (
        <PostUserInfoStyled>
            <Avatar alt={`${userName} avatar`} src={avatarOwner ?? ''} userName={userName} />
            <Link href={`${PATH.PUBLIC.PROFILE}/${ownerId}`}>{userName}</Link>
        </PostUserInfoStyled>
    )
}
