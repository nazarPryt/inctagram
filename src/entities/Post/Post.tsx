import React from 'react'
import {PostCardType} from 'entities/UserPosts/api/types'
import {PostHeader} from 'entities/Post/ui/PostHeader/PostHeader'
import {PostImage} from 'entities/Post/ui/PostImage/PostImage'
import {PostFeatures} from 'entities/Post/ui/PostFeatures/PostFeatures'
import {PostLikes} from 'entities/Post/ui/PostLikes/PostLikes'
import {PostWrapper} from 'entities/Post/Post.styled'
import {PostCommentForm} from 'entities/Post/ui/PostCommentForm/PostCommentForm'
import {PostComments} from 'entities/Post/ui/PostComments/PostComments'

type PostType = {
    post: PostCardType
}

//todo ask backend where i have to take userID

export const Post = ({post}: PostType) => {
    return (
        <PostWrapper>
            <PostHeader img={post.images[0].url} userID={post.id} />
            <PostImage images={post.images} />
            <PostFeatures />
            <PostComments />
            <PostLikes />
            <PostCommentForm />
        </PostWrapper>
    )
}
