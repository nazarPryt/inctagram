import React from 'react'
import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {useGetUserPostsQuery} from 'entities/UserPosts/api/user-posts-api'
import {Loader} from 'shared/components/Loader/Loader'
import {UserPost} from 'entities/UserPosts/ui/UserPost'
import {useSession} from 'next-auth/react'

export const ProfilePostsList = () => {
    const session = useSession()
    const userId = session.data?.user.userId as number
    const {data: posts, isLoading} = useGetUserPostsQuery(userId)

    if (isLoading) {
        return <Loader />
    }
    if (posts && posts.items.length === 0) {
        return <div>User doesnt have any posts</div>
    }
    return (
        <ProfilePostsListWrapper>
            {posts &&
                posts.items.map(post => {
                    return <UserPost key={post.id} src={post.images[0].url} />
                })}
        </ProfilePostsListWrapper>
    )
}
