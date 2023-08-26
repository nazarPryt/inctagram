import React from 'react'
import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {Loader} from 'shared/ui/Loader/Loader'
import {UserPost} from 'entities/UserPosts/ui/UserPost'
import {NoPosts} from 'entities/UserPosts/ui/NoPosts/NoPosts'
import {useGetUserPostsQuery} from 'entities/UserPosts/api/user-posts-api'

export const ProfilePostsList = () => {
    const userId = 248
    const {data: posts, isLoading} = useGetUserPostsQuery(userId as number)
    console.log('posts: ', posts)

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
                        postId={post.id}
                    />
                ))}
        </ProfilePostsListWrapper>
    )
}
