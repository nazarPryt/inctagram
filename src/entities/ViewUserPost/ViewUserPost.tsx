import React from 'react'
import {ViewUserPostWrapper} from 'entities/ViewUserPost/ViewUserPost.styled'
import {ViewUserPostHeader} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import {ViewUserPostComments} from 'entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments'
import {PostByIdType} from 'entities/ViewUserPost/api/type'
import {ViewUserPostSlider} from 'entities/ViewUserPost/ui/ViewUserPostSlider/ViewUserPostSlider'
import {ViewUserPostDescription} from 'entities/ViewUserPost/ui/ViewUserPostDescription/ViewUserPostDescription'
import {ViewUserPostAddComment} from 'entities/ViewUserPost/ui/ViewUserPostAddComment/ViewUserPostAddComment'
import {ViewUserPostFeatures} from 'entities/ViewUserPost/ui/ViewUserPostFeatures/ViewUserPostFeatures'

type PropsType = {
    data: PostByIdType
}

export const ViewUserPost = ({data}: PropsType) => {
    const des =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores, beatae consequatur corporis cum cumque cupiditate distinctio ex illum labore laudantium magnam maxime neque odit placeat possimus qui quos ratione recusandae, repellendus soluta suscipit temporibus voluptate! Alias impedit ipsam iusto.'
    return (
        <ViewUserPostWrapper>
            <ViewUserPostSlider className={'pictureSlider'} images={data.images} />

            <div className={'right'}>
                <ViewUserPostHeader userID={248} postId={data.id} />
                <ViewUserPostDescription description={des} createdAt={data.createdAt} />
                <ViewUserPostComments />
                <ViewUserPostFeatures />
                <ViewUserPostAddComment />
            </div>
        </ViewUserPostWrapper>
    )
}
