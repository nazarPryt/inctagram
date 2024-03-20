import {AllPostsTypeItems} from '@/entities/Post/api/allPosts.types'

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
