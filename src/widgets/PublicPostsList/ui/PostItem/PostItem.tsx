import {AllPostsTypeItems} from '@/entities/Post/api/allPosts.types'

import {PostDescription} from '../PostDescription'
import {PostPhotos} from '../PostPhotos'
import {PostUserInfo} from '../PostUserInfo'
import {PostItemStyled} from './PostItem.styled'

export const PostItem = ({post}: {post: AllPostsTypeItems}) => {
    return (
        <PostItemStyled>
            <PostPhotos images={post.images} ownerId={post.ownerId} postId={post.id} />
            <PostUserInfo avatarOwner={post.avatarOwner} ownerId={post.ownerId} userName={post.userName} />
            <PostDescription createdAt={post.createdAt} description={post.description} />
        </PostItemStyled>
    )
}
