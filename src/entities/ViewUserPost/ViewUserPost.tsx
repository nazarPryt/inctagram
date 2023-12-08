import {useState} from 'react'
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

    return (
        <ViewUserPostWrapper>
            <ViewUserPostSlider className={'left'} images={data.images} />
            {edit ? (
                <EditPost userId={data.id} edit={edit} setEdit={setEdit} data={data} />
            ) : (
                <div className={'right'}>
                    <ViewUserPostHeader data={data} edit={edit} setEdit={setEdit} userId={248} />
                    <ViewUserPostDescription description={data.description} createdAt={data.createdAt} />
                    <ViewUserPostComments />
                    <ViewUserPostFeatures />
                    <ViewUserPostAddComment />
                </div>
            )}
        </ViewUserPostWrapper>
    )
}
