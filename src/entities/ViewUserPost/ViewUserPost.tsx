import {useState} from 'react'

import {EditPost} from '@/features/Post/EditPost/ui/EditPost'
import {useMode} from '@/shared/hooks/useMode'

import {ViewUserPostWrapper} from './ViewUserPost.styled'
import {PostByIdType} from './api/getPost.types'
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
                <EditPost data={post} edit={edit} setEdit={setEdit} />
            ) : (
                <div className={'right'}>
                    <ViewUserPostHeader edit={edit} post={post} setEdit={setEdit} />
                    <ViewUserPostDescription createdAt={post.createdAt} description={post.description} />
                    <ViewUserPostComments />
                    <ViewUserPostFeatures mode={mode} />
                    <ViewUserPostAddComment mode={mode} />
                </div>
            )}
        </ViewUserPostWrapper>
    )
}
