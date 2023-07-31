import React from 'react'
import {Comment} from 'entities/Comment/ui/Comment'
import {PostCommentsWrapper} from 'entities/Post/ui/PostComments/PostComments.styled'

type PostDescriptionType = {}
export const PostComments = ({}: PostDescriptionType) => {
    return (
        <PostCommentsWrapper>
            <Comment comment={'post.description'} userID={3} img={'https://loremflickr.com/500/500'} />
        </PostCommentsWrapper>
    )
}
