import {ViewUserPostHeader} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import {TextArea} from 'shared/ui/TextArea/TextArea'
import {Button} from 'shared/ui/Button/Button'
import React, {Dispatch, SetStateAction} from 'react'
import {useEditPost} from './UseEditPost'
import {PostByIdType} from 'entities/ViewUserPost/api/type'
import {EditPostWrapper} from './EditPost.styled'

type EditPostPropsType = {
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
    data: PostByIdType
}
export const EditPost = ({edit, setEdit, data}: EditPostPropsType) => {
    const {register, handleSubmit, errors, isLoading} = useEditPost({postId: data.id, setEdit})

    return (
        <EditPostWrapper onSubmit={handleSubmit}>
            <ViewUserPostHeader edit={edit} setEdit={setEdit} userId={248} postId={data.id} />
            <TextArea
                className={'textArea'}
                defaultValue={data.description}
                {...register('description')}
                error={errors.description?.message}
                label='Add Publication descriptions'
            />
            <div className={'buttonsWrapper'}>
                <Button type={'button'} disabled={isLoading} variant={'outlined'} onClick={() => setEdit(false)}>
                    Back
                </Button>
                <Button type={'submit'} disabled={isLoading}>
                    Save Changes
                </Button>
            </div>
        </EditPostWrapper>
    )
}
