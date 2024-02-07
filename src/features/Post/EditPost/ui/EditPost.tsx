import {Dispatch, SetStateAction} from 'react'

import {PostByIdType} from '@/entities/ViewUserPost/api/type'
import {ViewUserPostHeader} from '@/entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import {useEditPost} from '@/features/Post/EditPost/hook/UseEditPost'
import {EditPostWrapper} from '@/features/Post/EditPost/ui/EditPost.styled'
import {Button, TextArea} from '@nazar-pryt/inctagram-ui-kit'

type PropsType = EditPostUserIdPropsType & EditPostPropsType
type EditPostPropsType = {
    data: PostByIdType
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
}
type EditPostUserIdPropsType = {
    userId: null | number
}

export const EditPost = ({data, edit, setEdit, userId}: PropsType) => {
    const {errors, handleSubmit, isLoading, register} = useEditPost({postId: data.id, setEdit})

    return (
        <EditPostWrapper onSubmit={handleSubmit}>
            <ViewUserPostHeader data={data} edit={edit} setEdit={setEdit} />
            <TextArea
                className={'textArea'}
                defaultValue={data.description}
                {...register('description')}
                error={errors.description?.message}
                label={'Add Publication descriptions'}
            />
            <div className={'buttonsWrapper'}>
                <Button disabled={isLoading} onClick={() => setEdit(false)} type={'button'} variant={'outlined'}>
                    Back
                </Button>
                <Button disabled={isLoading} type={'submit'}>
                    Save Changes
                </Button>
            </div>
        </EditPostWrapper>
    )
}
