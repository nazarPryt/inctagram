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
import {ProfileHeaderMode} from '@/widgets/Profile/ui/ProfileHeader/ProfileHeader'

type PropsType = {
    data: PostByIdType
    mode: ProfileHeaderMode
}

export const ViewUserPost = ({data, mode}: PropsType) => {
    const [edit, setEdit] = useState(false)

    return (
        <ViewUserPostWrapper>
            <ViewUserPostSlider className={'left'} images={data.images} />
            {edit ? (
                <EditPost data={data} edit={edit} setEdit={setEdit} userId={data.id} />
            ) : (
                <div className={'right'}>
                    <ViewUserPostHeader data={data} edit={edit} mode={mode} setEdit={setEdit} />
                    <ViewUserPostDescription createdAt={data.createdAt} description={data.description} />
                    <ViewUserPostComments />
                    <ViewUserPostFeatures mode={mode} />
                    <ViewUserPostAddComment mode={mode} />
                </div>
            )}
        </ViewUserPostWrapper>
    )
}
