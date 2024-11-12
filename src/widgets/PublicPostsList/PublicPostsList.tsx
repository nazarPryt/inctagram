import {AllPostsItemType} from '@/entities/Post/helpers/AllPosts.schema'

import {PublicPostsListStyled} from './PublicPostsList.styled'
import {PostItem} from './ui/PostItem'

export const PublicPostsList = ({posts}: {posts: AllPostsItemType[]}) => {
    return (
        <PublicPostsListStyled>
            {posts.map((post, index) => (
                <PostItem key={index} post={post} />
            ))}
        </PublicPostsListStyled>
    )
}
