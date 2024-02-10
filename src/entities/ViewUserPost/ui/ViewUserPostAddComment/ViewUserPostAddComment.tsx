import {useCommentPost} from '@/features/Post/CommentPost/hook/UseCommentPost'
import {Button, TextArea} from '@nazar-pryt/inctagram-ui-kit'

import {ViewUserPostAddCommentWrapper} from './ViewUserPostAddComment.styled'

export const ViewUserPostAddComment = () => {
    const {errors, handleSubmit, register} = useCommentPost()

    return (
        <ViewUserPostAddCommentWrapper onSubmit={handleSubmit}>
            <TextArea placeholder={'Add a Comment...'} {...register('comment')} error={errors.comment?.message} />
            <Button type={'submit'} variant={'outlined'}>
                Publish
            </Button>
        </ViewUserPostAddCommentWrapper>
    )
}
