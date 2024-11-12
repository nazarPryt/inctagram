import {Dispatch, SetStateAction} from 'react'
import {Controller} from 'react-hook-form'

import {PostByIdType} from '@/entities/ViewUserPost/api/getPost.types'
import {ViewUserPostHeader} from '@/entities/ViewUserPost/ui/ViewUserPostHeader'
import {useEditPost} from '@/features/Post/EditPost/hook/UseEditPost'
import {EditPostWrapper} from '@/features/Post/EditPost/ui/EditPost.styled'
import {Button, TextArea} from '@nazar-pryt/inctagram-ui-kit'

type EditPostPropsType = {
    edit: boolean
    post: PostByIdType
    setEdit: Dispatch<SetStateAction<boolean>>
}

export const EditPost = ({edit, post, setEdit}: EditPostPropsType) => {
    const {control, errors, handleSubmit, isLoading} = useEditPost({post, setEdit})

    return (
        <EditPostWrapper onSubmit={handleSubmit}>
            <ViewUserPostHeader edit={edit} post={post} setEdit={setEdit} />
            <Controller
                control={control}
                name={'description'}
                render={({field}) => (
                    <TextArea
                        {...field}
                        className={'textArea'}
                        error={errors.description?.message}
                        label={'Add Publication descriptions'}
                        maxLength={300}
                    />
                )}
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
