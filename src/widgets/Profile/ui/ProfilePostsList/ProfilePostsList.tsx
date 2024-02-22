import {UserPost} from '@/entities/UserPosts/UserPost'
import {PostsType} from '@/entities/UserPosts/api/types'
import {NoPosts} from '@/shared/ui/NoPosts'

import {ProfilePostsListWrapper} from './ProfilePostsList.styled'
import {ProfilePostsListSkeleton} from './ProfilePostsListSkeleton'

type PropsType = {
    isLoadingPosts?: boolean
    posts: Pick<PostsType, 'items'> | undefined
}

export const ProfilePostsList = ({isLoadingPosts, posts}: PropsType) => {
    if (isLoadingPosts) {
        return <ProfilePostsListSkeleton />
    }

    if (posts) {
        const isNoPosts = posts.items.length === 0

        return (
            <ProfilePostsListWrapper>
                {isNoPosts && <NoPosts />}
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

    return null
}
