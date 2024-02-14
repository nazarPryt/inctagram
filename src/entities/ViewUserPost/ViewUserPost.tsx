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
import {ComponentMode} from '@/shared/hooks/useMode'

type PropsType = {
    mode: ComponentMode
    post: PostByIdType
}

export const ViewUserPost = ({mode, post}: PropsType) => {
    const [edit, setEdit] = useState(false)

    return (
        <ViewUserPostWrapper>
            <ViewUserPostSlider className={'left'} images={post.images} />
            {edit ? (
                <EditPost data={post} edit={edit} setEdit={setEdit} userId={post.id} />
            ) : (
                <div className={'right'}>
                    <ViewUserPostHeader data={post} edit={edit} mode={mode} setEdit={setEdit} />
                    <ViewUserPostDescription createdAt={post.createdAt} description={post.description} />
                    <ViewUserPostComments />
                    <ViewUserPostFeatures mode={mode} />
                    <ViewUserPostAddComment mode={mode} />
                </div>
            )}
        </ViewUserPostWrapper>
    )
}
