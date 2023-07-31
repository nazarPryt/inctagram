import React from 'react'
import {ViewUserPostCommentsWrapper} from 'entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments.styled'
import {Comment} from 'entities/Comment/ui/Comment'

export const ViewUserPostComments = () => {
    return (
        <ViewUserPostCommentsWrapper>
            <Comment comment={'post.description'} userID={3} img={'https://loremflickr.com/500/500'} />
            <Comment comment={'post.description'} userID={3} img={'https://loremflickr.com/500/500'} />
            <Comment comment={'post.description'} userID={3} img={'https://loremflickr.com/500/500'} />
            <Comment comment={'post.description'} userID={3} img={'https://loremflickr.com/500/500'} />
        </ViewUserPostCommentsWrapper>
    )
}
