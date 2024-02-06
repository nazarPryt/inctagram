import {PostsType} from '@/entities/UserPosts/api/types'
import {UserPost} from '@/entities/UserPosts/ui/UserPost'

import {PublicProfilePostsListStyled} from './PublicProfilePostsList.styled'

type PropsType = {posts: Pick<PostsType, 'items'>}
export const PublicProfilePostsList = ({posts}: PropsType) => {
    return (
        <PublicProfilePostsListStyled>
            {posts.items.map(post => {
                const images = [...post.images]
                    .filter(img => img.width === 1440)
                    .sort((a, b) => b.uploadId.localeCompare(a.uploadId))

                return (
                    <UserPost imagesLength={post.images.length} key={post.id} postId={post.id} src={images[0]?.url} />
                )
            })}
        </PublicProfilePostsListStyled>
    )
}
