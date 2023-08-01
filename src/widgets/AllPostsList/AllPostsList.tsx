import React from 'react'
import {Post} from 'entities/Post/Post'
import {PostCardType} from 'entities/UserPosts/api/types'
import {AllPostsListWrapper} from 'widgets/AllPostsList/AllPostsList.styled'

type PostsListType = {
    posts: PostCardType[]
}
export const AllPostsList = (props: PostsListType) => {
    return (
        <AllPostsListWrapper>
            {props.posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </AllPostsListWrapper>
    )
}
