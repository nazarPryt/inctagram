import React from 'react'
import {ViewUserPostAddCommentWrapper} from 'entities/ViewUserPost/ui/ViewUserPostAddComment/ViewUserPostAddComment.styled'
import {TextArea} from 'shared/ui/TextArea/TextArea'
import {Button} from 'shared/ui/Button/Button'
import {useCommentPost} from 'features/CommentPost/UseCommentPost'

export const ViewUserPostAddComment = () => {
    const {register, handleSubmit, errors} = useCommentPost()

    return (
        <ViewUserPostAddCommentWrapper onSubmit={handleSubmit}>
            <TextArea placeholder={'Add a Comment...'} {...register('comment')} error={errors.comment?.message} />
            <Button type={'submit'} variant={'outlined'}>
                Publish
            </Button>
        </ViewUserPostAddCommentWrapper>
    )
}
