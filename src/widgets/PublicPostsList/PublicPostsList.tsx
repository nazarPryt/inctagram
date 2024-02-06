import {PublicPostsTypeItems} from '@/widgets/PublicPostsList/api/publicPosts.type'

import {PublicPostsListStyled} from './PublicPostsList.styled'
import {PostItem} from './ui/PostItem/PostItem'

export const PublicPostsList = ({posts}: {posts: PublicPostsTypeItems[]}) => {
    return (
        <PublicPostsListStyled>
            {posts.map((post, index) => (
                <PostItem key={index} post={post} />
            ))}
        </PublicPostsListStyled>
    )
}
