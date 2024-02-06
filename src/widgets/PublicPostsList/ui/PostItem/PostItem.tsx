import {PublicPostsTypeItems} from '@/widgets/PublicPostsList/api/publicPosts.type'

import {PostDescription} from '../PostDescription/PostDescription'
import {PostItemStyled} from '../PostItem/PostItem.styled'
import {PostPhotos} from '../PostPhotos/PostPhotos'
import {PostUserInfo} from '../PostUserInfo/PostUserInfo'

type PostItemType = {
    post: PublicPostsTypeItems
}
export const PostItem = ({post}: PostItemType) => {
    return (
        <PostItemStyled>
            <PostPhotos photos={post.images} />
            <PostUserInfo avatarOwner={post.avatarOwner} userName={post.userName} />
            <PostDescription createdAt={post.createdAt} description={post.description} />
        </PostItemStyled>
    )
}
