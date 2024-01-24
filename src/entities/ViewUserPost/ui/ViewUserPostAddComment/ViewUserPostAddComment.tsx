import {ViewUserPostAddCommentWrapper} from 'entities/ViewUserPost/ui/ViewUserPostAddComment/ViewUserPostAddComment.styled'
import {useCommentPost} from 'features/Post/CommentPost/hook/UseCommentPost'
import {Button} from 'shared/ui/Button/Button'
import {TextArea} from 'shared/ui/TextArea/TextArea'

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
