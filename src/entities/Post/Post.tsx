import React from 'react'
import {PostCardType} from 'entities/Post/api/types'
import {PostHeader} from 'entities/Post/ui/PostHeader/PostHeader'
import {PostImage} from 'entities/Post/ui/PostImage/PostImage'
import {PostFeatures} from 'entities/Post/ui/PostFeatures/PostFeatures'
import {PostDescription} from 'entities/Post/ui/PostDesciption/PostDescription'
import {PostLikes} from 'entities/Post/ui/PostLikes/PostLikes'
import {PostComments} from 'entities/Post/ui/PostComments/PostComments'
import {PostWrapper} from 'entities/Post/Post.styled'

type PostType = {
    post: PostCardType
}

//todo ask backend where i have to take userID
//todo PostImage should have Swiper

export const Post = ({post}: PostType) => {
    return (
        <PostWrapper>
            <PostHeader img={post.images[0].url} userID={post.id} />
            <PostImage img={post.images[0].url} />
            <PostFeatures />
            <PostDescription description={post.description} userID={post.id} img={post.images[0].url} />
            <PostLikes />
            <PostComments />
        </PostWrapper>
    )
}
