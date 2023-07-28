import React from 'react'
import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {Loader} from '../../../../shared/ui/Loader/Loader'
import {UserPost} from 'entities/UserPosts/ui/UserPost'
import {NoPosts} from 'entities/UserPosts/ui/NoPosts/NoPosts'
import {useGetUserPostsQuery} from '../../../../entities/UserPosts/api/user-posts-api'

export const ProfilePostsList = ({userId}: {userId: number | null}) => {
    const {data: posts, isLoading} = useGetUserPostsQuery(userId as number)

    if (isLoading) {
        return <Loader />
    }
    if (posts && posts.items.length === 0) {
        return <NoPosts />
    }

    return (
        <ProfilePostsListWrapper>
            {posts &&
                posts.items.map(post => {
                    return <UserPost imagesLength={post.images.length} key={post.id} src={post.images[0]?.url} />
                })}
        </ProfilePostsListWrapper>
    )
}
