import {PATH} from '@/_app/AppSettings/PATH'
import {AllPostsTypeItems} from '@/entities/Post/api/all-posts-api.type'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostUserInfoStyled} from './PostUserInfo.styled'

type PostUserInfoType = Pick<AllPostsTypeItems, 'avatarOwner' | 'ownerId' | 'userName'>

export const PostUserInfo = ({avatarOwner, ownerId, userName}: PostUserInfoType) => {
    return (
        <PostUserInfoStyled>
            <Avatar alt={`${userName} avatar`} src={avatarOwner} userName={userName} />
            <Link href={`${PATH.PUBLIC.PROFILE}/${ownerId}`}>{userName}</Link>
        </PostUserInfoStyled>
    )
}
