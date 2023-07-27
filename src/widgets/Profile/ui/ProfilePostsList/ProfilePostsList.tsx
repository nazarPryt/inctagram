import React from 'react'
import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {useGetUserPostsQuery} from 'entities/UserPosts/api/user-posts-api'
import {Loader} from '../../../../shared/ui/Loader/Loader'
import {UserPost} from 'entities/UserPosts/ui/UserPost'
import {NoPosts} from 'entities/UserPosts/ui/NoPosts/NoPosts'

export const ProfilePostsList = ({userId}: {userId: number | null}) => {
    const {data: posts, isLoading} = useGetUserPostsQuery(userId as number, {refetchOnMountOrArgChange: true})

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
                    return <UserPost key={post.id} src={post.images[0]?.url} />
                })}
        </ProfilePostsListWrapper>
    )
}
