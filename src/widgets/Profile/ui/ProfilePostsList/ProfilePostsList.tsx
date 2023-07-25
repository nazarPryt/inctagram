import React from 'react'
import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {useGetUserPostsQuery} from 'entities/UserPosts/api/user-posts-api'
import {Loader} from 'shared/components/Loader/Loader'
import {UserPost} from 'entities/UserPosts/ui/UserPost'

export const ProfilePostsList = () => {
    const userId = 248
    const {data: posts, isLoading} = useGetUserPostsQuery(userId)

    console.log(posts)
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
