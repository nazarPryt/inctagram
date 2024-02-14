import {useCommentPost} from '@/features/Post/CommentPost/hook/UseCommentPost'
import {ComponentMode} from '@/shared/hooks/useMode'
import {Button, TextArea} from '@nazar-pryt/inctagram-ui-kit'

import {ViewUserPostAddCommentWrapper} from './ViewUserPostAddComment.styled'
type PropsType = {
    mode: ComponentMode
}
export const ViewUserPostAddComment = ({mode}: PropsType) => {
    const {errors, handleSubmit, register} = useCommentPost()

    if (mode === 'myProfile') {
        return (
            <ViewUserPostAddCommentWrapper onSubmit={handleSubmit}>
                <TextArea placeholder={'Add a Comment...'} {...register('comment')} error={errors.comment?.message} />
                <Button type={'submit'} variant={'outlined'}>
                    Publish
                </Button>
            </ViewUserPostAddCommentWrapper>
        )
    }

    return null
}
