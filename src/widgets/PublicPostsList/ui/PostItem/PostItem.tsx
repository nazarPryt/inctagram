import {AllPostsTypeItems} from '@/entities/Post/api/all-posts-api.type'

import {PostDescription} from '../PostDescription/PostDescription'
import {PostItemStyled} from '../PostItem/PostItem.styled'
import {PostPhotos} from '../PostPhotos/PostPhotos'
import {PostUserInfo} from '../PostUserInfo/PostUserInfo'

export const PostItem = ({post}: {post: AllPostsTypeItems}) => {
    return (
        <PostItemStyled>
            <PostPhotos images={post.images} />
            <PostUserInfo avatarOwner={post.avatarOwner} ownerId={post.ownerId} userName={post.userName} />
            <PostDescription createdAt={post.createdAt} description={post.description} />
        </PostItemStyled>
    )
}
