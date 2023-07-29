import React from 'react'
import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {Loader} from 'shared/ui/Loader/Loader'
import {UserPost} from 'entities/UserPosts/ui/UserPost'
import {NoPosts} from 'entities/UserPosts/ui/NoPosts/NoPosts'
import {PATH} from 'shared/constants/PATH'
import {useGetUserPostsQuery} from 'entities/UserPosts/api/user-posts-api'

export const ProfilePostsList = ({userId}: {userId: number | null}) => {
    const {data: posts, isLoading} = useGetUserPostsQuery(userId as number)
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

    if (isLoading) {
        return <Loader />
    }
    if (posts && posts.items.length === 0) {
        return <NoPosts />
    }

    return (
        <ProfilePostsListWrapper>
            {posts &&
                posts.items.map(post => (
                    <UserPost
                        key={post.id}
                        imagesLength={post.images.length}
                        src={post.images[0]?.url}
                        href={`${BASE_URL}${PATH.VIEW_POST}/${post.id}`}
                    />
                ))}
        </ProfilePostsListWrapper>
    )
}
