import React, {useState} from 'react'
import {PostCommentsWrapper} from 'entities/Post/ui/PostComments/PostComments.styled'
import {useTranslation} from 'shared/hooks/useTranslation'
import {TextArea} from '../../../../shared/ui/TextArea/TextArea'
import {Button} from '../../../../shared/ui/Button/Button'
import {Modal} from '../../../../shared/ui/Modal/Modal'

export const PostComments = () => {
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <PostCommentsWrapper>
            <button onClick={() => setIsModalOpen(true)}>{`${t.home.viewComm} ${114}`}</button>
            <form className={'textAreaWrapper'}>
                <TextArea placeholder={t.home.addComm} />
                <Button variant={'outlined'}>{t.home.publish}</Button>
            </form>
            <Modal isOpen={isModalOpen} handleClose={handleCloseModal} title={'modal'}>
                <div>PostComments content</div>
            </Modal>
        </PostCommentsWrapper>
    )
}
