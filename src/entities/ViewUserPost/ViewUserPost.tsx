import {useState} from 'react'

import {EditPost} from '@/features/Post/EditPost/ui/EditPost'
import {useMode} from '@/shared/hooks/useMode'

import {ViewUserPostWrapper} from './ViewUserPost.styled'
import {PostByIdType} from './api/type'
import {ViewUserPostAddComment} from './ui/ViewUserPostAddComment'
import {ViewUserPostComments} from './ui/ViewUserPostComments'
import {ViewUserPostDescription} from './ui/ViewUserPostDescription'
import {ViewUserPostFeatures} from './ui/ViewUserPostFeatures'
import {ViewUserPostHeader} from './ui/ViewUserPostHeader'
import {ViewUserPostSlider} from './ui/ViewUserPostSlider'

type PropsType = {
    post: PostByIdType
}

export const ViewUserPost = ({post}: PropsType) => {
    const [edit, setEdit] = useState(false)
    const {mode} = useMode(post.ownerId)

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
