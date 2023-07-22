import React from 'react'
import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {useGetUserPostsQuery} from 'entities/UserPosts/api/user-posts-api'
import {Loader} from 'shared/components/Loader/Loader'
import Image from 'next/image'

export const ProfilePostsList = () => {
    const userId = 248
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
                    return <Image key={post.id} src={post.images[0].url} alt={'re'} width={300} height={300} />
                })}
        </ProfilePostsListWrapper>
    )
}
