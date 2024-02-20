import {AllPostsTypeItems} from '@/entities/Post/api/all-posts-api.type'

import {PublicPostsListStyled} from './PublicPostsList.styled'
import {PostItem} from './ui/PostItem'

export const PublicPostsList = ({posts}: {posts: AllPostsTypeItems[]}) => {
    return (
        <PublicPostsListStyled>
            {posts.map((post, index) => (
                <PostItem key={index} post={post} />
            ))}
        </PublicPostsListStyled>
    )
}
