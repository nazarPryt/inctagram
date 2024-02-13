import {PostsType} from '@/entities/UserPosts/api/types'
import {NoPosts} from '@/entities/UserPosts/ui/NoPosts/NoPosts'
import {UserPost} from '@/entities/UserPosts/ui/UserPost'

import {ProfilePostsListWrapper} from './ProfilePostsList.styled'
import {ProfilePostsListSkeleton} from './ProfilePostsListSkeleton'

type PropsType = {isLoadingPosts?: boolean; posts: Pick<PostsType, 'items'>}

export const ProfilePostsList = ({isLoadingPosts, posts}: PropsType) => {
    const isNoPosts = posts.items.length === 0

    if (isLoadingPosts) {
        return <ProfilePostsListSkeleton />
    }
    if (isNoPosts) {
        return <NoPosts />
    }

    return (
        <ProfilePostsListWrapper>
            {posts.items.map(post => {
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
