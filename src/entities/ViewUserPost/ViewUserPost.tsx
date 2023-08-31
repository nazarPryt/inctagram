import { useState } from 'react'

import { PostByIdType } from 'entities/ViewUserPost/api/type'
import { ViewUserPostAddComment } from 'entities/ViewUserPost/ui/ViewUserPostAddComment/ViewUserPostAddComment'
import { ViewUserPostComments } from 'entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments'
import { ViewUserPostDescription } from 'entities/ViewUserPost/ui/ViewUserPostDescription/ViewUserPostDescription'
import { ViewUserPostFeatures } from 'entities/ViewUserPost/ui/ViewUserPostFeatures/ViewUserPostFeatures'
import { ViewUserPostHeader } from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import { ViewUserPostSlider } from 'entities/ViewUserPost/ui/ViewUserPostSlider/ViewUserPostSlider'
import { ViewUserPostWrapper } from 'entities/ViewUserPost/ViewUserPost.styled'
import { EditPost } from 'features/Post/EditPost/ui/EditPost'

type PropsType = {
  data: PostByIdType
}

export const ViewUserPost = ({ data }: PropsType): JSX.Element => {
  const [edit, setEdit] = useState(false)

  const images = [...data.images].filter(img => img.width === 1440).sort((a, b) => b.uploadId.localeCompare(a.uploadId))

  return (
    <ViewUserPostWrapper>
      <ViewUserPostSlider className="left" images={images} />
      {edit ? (
        <EditPost data={data} edit={edit} setEdit={setEdit} />
      ) : (
        <div className="right">
          <ViewUserPostHeader edit={edit} postId={data.id} setEdit={setEdit} userId={248} />
          <ViewUserPostDescription createdAt={data.createdAt} description={data.description} />
          <ViewUserPostComments />
          <ViewUserPostFeatures />
          <ViewUserPostAddComment />
        </div>
      )}
    </ViewUserPostWrapper>
  )
}
