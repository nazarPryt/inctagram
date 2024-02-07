import {useState} from 'react'

import {ViewUserPostWrapper} from '@/entities/ViewUserPost/ViewUserPost.styled'
import {PostByIdType} from '@/entities/ViewUserPost/api/type'
import {ViewUserPostAddComment} from '@/entities/ViewUserPost/ui/ViewUserPostAddComment/ViewUserPostAddComment'
import {ViewUserPostComments} from '@/entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments'
import {ViewUserPostDescription} from '@/entities/ViewUserPost/ui/ViewUserPostDescription/ViewUserPostDescription'
import {ViewUserPostFeatures} from '@/entities/ViewUserPost/ui/ViewUserPostFeatures/ViewUserPostFeatures'
import {ViewUserPostHeader} from '@/entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import {ViewUserPostSlider} from '@/entities/ViewUserPost/ui/ViewUserPostSlider/ViewUserPostSlider'
import {EditPost} from '@/features/Post/EditPost/ui/EditPost'

type PropsType = {
    data: PostByIdType
}

export const ViewUserPost = ({data}: PropsType) => {
    const [edit, setEdit] = useState(false)

    return (
        <ViewUserPostWrapper>
            <ViewUserPostSlider className={'left'} images={data.images} />
            {edit ? (
                <EditPost data={data} edit={edit} setEdit={setEdit} userId={data.id} />
            ) : (
                <div className={'right'}>
                    <ViewUserPostHeader data={data} edit={edit} setEdit={setEdit} />
                    <ViewUserPostDescription createdAt={data.createdAt} description={data.description} />
                    <ViewUserPostComments />
                    <ViewUserPostFeatures />
                    <ViewUserPostAddComment />
                </div>
            )}
        </ViewUserPostWrapper>
    )
}
