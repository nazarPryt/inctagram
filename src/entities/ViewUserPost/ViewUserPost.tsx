import React, {useState} from 'react'
import {ViewUserPostWrapper} from 'entities/ViewUserPost/ViewUserPost.styled'
import {ViewUserPostHeader} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import {ViewUserPostComments} from 'entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments'
import {PostByIdType} from 'entities/ViewUserPost/api/type'
import {ViewUserPostSlider} from 'entities/ViewUserPost/ui/ViewUserPostSlider/ViewUserPostSlider'
import {ViewUserPostDescription} from 'entities/ViewUserPost/ui/ViewUserPostDescription/ViewUserPostDescription'
import {ViewUserPostAddComment} from 'entities/ViewUserPost/ui/ViewUserPostAddComment/ViewUserPostAddComment'
import {ViewUserPostFeatures} from 'entities/ViewUserPost/ui/ViewUserPostFeatures/ViewUserPostFeatures'
import {EditPost} from 'features/Post/EditPost/ui/EditPost'

type PropsType = {
    data: PostByIdType
}

export const ViewUserPost = ({data}: PropsType) => {
    const [edit, setEdit] = useState(false)

    const images = [...data.images]
        .filter(img => img.width === 1440)
        .sort((a, b) => b.uploadId.localeCompare(a.uploadId))

    return (
        <ViewUserPostWrapper>
            <ViewUserPostSlider className={'left'} images={images} />
            {edit ? (
                <EditPost edit={edit} setEdit={setEdit} data={data} />
            ) : (
                <div className={'right'}>
                    <ViewUserPostHeader edit={edit} setEdit={setEdit} userId={248} postId={data.id} />
                    <ViewUserPostDescription description={data.description} createdAt={data.createdAt} />
                    <ViewUserPostComments />
                    <ViewUserPostFeatures />
                    <ViewUserPostAddComment />
                </div>
            )}
        </ViewUserPostWrapper>
    )
}
