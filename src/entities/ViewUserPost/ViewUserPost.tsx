import React from 'react'
import {ViewUserPostWrapper} from 'entities/ViewUserPost/ViewUserPost.styled'
import {ViewUserPostHeader} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import {ViewUserPostComments} from 'entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments'
import {PostByIdType} from 'entities/ViewUserPost/api/type'
import {ViewUserPostSlider} from 'entities/ViewUserPost/ui/ViewUserPostSlider/ViewUserPostSlider'

type PropsType = {
    data: PostByIdType
}

export const ViewUserPost = ({data}: PropsType) => {
    return (
        <ViewUserPostWrapper>
            <ViewUserPostSlider className={'pictureSlider'} images={data.images} />

            <div className={'right'}>
                <ViewUserPostHeader userID={248} postId={data.id} />
                <ViewUserPostComments />
            </div>
        </ViewUserPostWrapper>
    )
}
