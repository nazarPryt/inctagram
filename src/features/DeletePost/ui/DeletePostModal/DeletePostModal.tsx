import React from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {Button} from 'shared/ui/Button/Button'
import {DeletePostModalWrapper} from 'features/DeletePost/ui/DeletePostModal/DeletePostModal.styled'
import {useTranslation} from 'shared/hooks/useTranslation'

type PropsType = {
    isOpen: boolean
    handleModalClose: () => void
    handleDeletePost: () => void
}
export const DeletePostModal = ({isOpen, handleModalClose, handleDeletePost}: PropsType) => {
    const {t} = useTranslation()

    return (
        <Modal handleClose={handleModalClose} isOpen={isOpen} title={t.myPost.modal.title}>
            <DeletePostModalWrapper>
                <p>{t.myPost.modal.description}</p>
                <div className={'buttonsWrapper'}>
                    <Button variant={'outlined'} onClick={handleDeletePost}>
                        {t.myPost.modal.btn1}
                    </Button>
                    <Button onClick={handleModalClose}>{t.myPost.modal.btn2}</Button>
                </div>
            </DeletePostModalWrapper>
        </Modal>
    )
}
