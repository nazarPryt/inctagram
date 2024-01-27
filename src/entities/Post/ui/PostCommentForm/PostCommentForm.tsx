import {useState} from 'react'

import {PostCommentFormWrapper} from '@/entities/Post/ui/PostCommentForm/PostCommentForm.styled'
import {useCommentPost} from '@/features/Post/CommentPost/hook/UseCommentPost'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button} from '@/shared/ui/Button/Button'
import {Modal} from '@/shared/ui/Modal/Modal'
import {TextArea} from '@/shared/ui/TextArea/TextArea'

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
