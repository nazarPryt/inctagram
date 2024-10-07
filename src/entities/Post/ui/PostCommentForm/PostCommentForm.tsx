import {useState} from 'react'
import {Controller} from 'react-hook-form'

import {useCommentPost} from '@/features/Post/CommentPost/hook/UseCommentPost'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button, Modal, TextArea} from '@nazar-pryt/inctagram-ui-kit'

import {PostCommentFormWrapper} from './PostCommentForm.styled'

export const PostCommentForm = () => {
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {control, errors, handleSubmit} = useCommentPost()

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <PostCommentFormWrapper>
            <button onClick={() => setIsModalOpen(true)}>{`${t.home.viewComm} ${114}`}</button>
            <form onSubmit={handleSubmit}>
                <Controller
                    control={control}
                    name={'comment'}
                    render={({field}) => (
                        <TextArea
                            {...field}
                            error={errors.comment?.message}
                            maxLength={100}
                            placeholder={t.home.addComm}
                        />
                    )}
                />
                <Button variant={'outlined'}>{t.home.publish}</Button>
            </form>
            <Modal onClose={handleCloseModal} open={isModalOpen} title={'modal'}>
                <div>PostComments content</div>
            </Modal>
        </PostCommentFormWrapper>
    )
}
