import {useGetUserPostsQuery} from '@/entities/UserPosts/api/user-posts-api'
import {NoPosts} from '@/entities/UserPosts/ui/NoPosts/NoPosts'
import {UserPost} from '@/entities/UserPosts/ui/UserPost'
import {useAppSelector} from '@/shared/hooks/reduxHooks'

import {ProfilePostsListWrapper} from './ProfilePostsList.styled'
import {ProfilePostsListSkeleton} from './ProfilePostsListSkeleton'

export const ProfilePostsList = () => {
    const userId = useAppSelector(state => state.userAuth.userId) as number
    const endCursorPostId = null

    const {data: posts, isLoading} = useGetUserPostsQuery({endCursorPostId, userId})

    const isNoPosts = posts && posts.items.length === 0

    if (isLoading) {
        return <ProfilePostsListSkeleton />
    }
    if (isNoPosts) {
        return <NoPosts />
    }

    return (
        <ProfilePostsListWrapper>
            {posts &&
                posts.items.map(post => {
                    return (
                        <UserPost
                            imagesLength={post.images.length}
                            key={post.id}
                            postId={post.id}
                            src={post.images[0]?.url}
                        />
                    )
                })}
        </ProfilePostsListWrapper>
    )
}
