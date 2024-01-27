import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button} from '@/shared/ui/Button/Button'
import {Modal} from '@/shared/ui/Modal/Modal'

import {ModalConfirmChangedPasswordWrapper} from './ModalConfirmChangedPassword.styled'

type PropsType = {
    handleModalClose: () => void
    isOpen: boolean
}
export const ModalConfirmChangedPassword = (props: PropsType) => {
    const {t} = useTranslation()

    return (
        <Modal handleClose={props.handleModalClose} isOpen={props.isOpen} title={'New Password'}>
            <ModalConfirmChangedPasswordWrapper>
                <p>{t.auth.newPassword.modal}</p>
                <Button onClick={props.handleModalClose}>{t.auth.modal.btn}</Button>
            </ModalConfirmChangedPasswordWrapper>
        </Modal>
    )
}
