import React from 'react'
import {Post} from 'entities/Post/Post'
import {PostCardType} from 'entities/Post/api/types'
import {PostsListWrapper} from 'widgets/PostsList/PostsList.styled'

type PostsListType = {
    posts: PostCardType[]
}
export const PostsList = (props: PostsListType) => {
    return (
        <PostsListWrapper>
            {props.posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </PostsListWrapper>
    )
}
