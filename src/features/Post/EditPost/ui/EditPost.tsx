import {Dispatch, SetStateAction} from 'react'
import {Controller} from 'react-hook-form'

import {PostByIdType} from '@/entities/ViewUserPost/api/type'
import {ViewUserPostHeader} from '@/entities/ViewUserPost/ui/ViewUserPostHeader'
import {useEditPost} from '@/features/Post/EditPost/hook/UseEditPost'
import {EditPostWrapper} from '@/features/Post/EditPost/ui/EditPost.styled'
import {Button, TextArea} from '@nazar-pryt/inctagram-ui-kit'

type EditPostPropsType = {
    data: PostByIdType
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
}

export const EditPost = ({data, edit, setEdit}: EditPostPropsType) => {
    const {control, errors, handleSubmit, isLoading} = useEditPost({data, setEdit})

    return (
        <EditPostWrapper onSubmit={handleSubmit}>
            <ViewUserPostHeader data={data} edit={edit} setEdit={setEdit} />
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
