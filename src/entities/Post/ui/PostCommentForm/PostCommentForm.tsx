import {useState} from 'react'
import {useTranslation} from 'shared/hooks/useTranslation'
import {TextArea} from 'shared/ui/TextArea/TextArea'
import {Modal} from 'shared/ui/Modal/Modal'
import {useCommentPost} from 'features/Post/CommentPost/hook/UseCommentPost'
import {PostCommentFormWrapper} from 'entities/Post/ui/PostCommentForm/PostCommentForm.styled'
import {Button} from 'shared/ui/Button/Button'

export const PostCommentForm = () => {
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {register, handleSubmit, errors} = useCommentPost()

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
            <Modal isOpen={isModalOpen} handleClose={handleCloseModal} title={'modal'}>
                <div>PostComments content</div>
            </Modal>
        </PostCommentFormWrapper>
    )
}
