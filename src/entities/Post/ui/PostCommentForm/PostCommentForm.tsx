import {useState} from 'react'

import {useCommentPost} from '@/features/Post/CommentPost/hook/UseCommentPost'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Modal} from '@/shared/ui/Modal/Modal'
import {Button, TextArea} from '@nazar-pryt/inctagram-ui-kit'

import {PostCommentFormWrapper} from './PostCommentForm.styled'

export const PostCommentForm = () => {
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {errors, handleSubmit, register} = useCommentPost()

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <PostCommentFormWrapper>
            <button onClick={() => setIsModalOpen(true)}>{`${t.home.viewComm} ${114}`}</button>
            <form className={'textAreaWrapper'} onSubmit={handleSubmit}>
                <TextArea placeholder={t.home.addComm} {...register('comment')} error={errors.comment?.message} />
                <Button variant={'outlined'}>{t.home.publish}</Button>
            </form>
            <Modal handleClose={handleCloseModal} isOpen={isModalOpen} title={'modal'}>
                <div>PostComments content</div>
            </Modal>
        </PostCommentFormWrapper>
    )
}
