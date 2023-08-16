import React from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {Button} from 'shared/ui/Button/Button'
import {useTranslation} from 'shared/hooks/useTranslation'
import {ModalConfirmChangedPasswordWrapper} from './ModalConfirmChangedPassword.styled'

type PropsType = {
    isOpen: boolean
    handleModalClose: () => void
}
export const ModalConfirmChangedPassword = (props: PropsType) => {
    const {t} = useTranslation()

    return (
        <Modal isOpen={props.isOpen} title={'New Password'} handleClose={props.handleModalClose}>
            <ModalConfirmChangedPasswordWrapper>
                <p>{t.auth.newPassword.modal}</p>
                <Button onClick={props.handleModalClose}>{t.auth.modal.btn}</Button>
            </ModalConfirmChangedPasswordWrapper>
        </Modal>
    )
}
