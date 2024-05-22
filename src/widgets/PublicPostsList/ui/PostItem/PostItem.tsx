import {AllPostsItemType} from '@/entities/Post/helpers/AllPosts.schema'

import {PostDescription} from '../PostDescription'
import {PostPhotos} from '../PostPhotos'
import {PostUserInfo} from '../PostUserInfo'
import {PostItemStyled} from './PostItem.styled'

export const PostItem = ({post}: {post: AllPostsItemType}) => {
    return (
        <PostItemStyled>
            <PostPhotos images={post.images} ownerId={post.ownerId} postId={post.id} />
            <PostUserInfo avatarOwner={post.avatarOwner} ownerId={post.ownerId} userName={post.userName} />
            <PostDescription createdAt={post.createdAt} description={post.description} />
        </PostItemStyled>
    )
}
