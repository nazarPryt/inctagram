import { Dispatch, SetStateAction } from 'react'

import { PostByIdType } from 'entities/ViewUserPost/api/type'
import { ViewUserPostHeader } from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import { useEditPost } from 'features/Post/EditPost/hook/UseEditPost'
import { EditPostWrapper } from 'features/Post/EditPost/ui/EditPost.styled'
import { Button } from 'shared/ui/Button/Button'
import { TextArea } from 'shared/ui/TextArea/TextArea'

type EditPostPropsType = {
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
  data: PostByIdType
}
export const EditPost = ({ edit, setEdit, data }: EditPostPropsType): JSX.Element => {
  const { register, handleSubmit, errors, isLoading } = useEditPost({ postId: data.id, setEdit })

  return (
    <EditPostWrapper onSubmit={handleSubmit}>
      <ViewUserPostHeader edit={edit} postId={data.id} setEdit={setEdit} userId={248} />
      <TextArea
        className="textArea"
        defaultValue={data.description}
        {...register('description')}
        error={errors.description?.message}
        label="Add Publication descriptions"
      />
      <div className="buttonsWrapper">
        <Button disabled={isLoading} type="button" variant="outlined" onClick={() => setEdit(false)}>
          Back
        </Button>
        <Button disabled={isLoading} type="submit">
          Save Changes
        </Button>
      </div>
    </EditPostWrapper>
  )
}
