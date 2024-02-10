import {useTranslation} from '@/shared/hooks/useTranslation'
import {Modal} from '@/shared/ui/Modal/Modal'
import {Button} from '@nazar-pryt/inctagram-ui-kit'

import {RegistrationModalWrapper} from './RegistrationModal.styled'

type PropsType = {
    email: string
    handleModalClose: () => void
    isOpen: boolean
}

export const RegistrationModal = ({email, handleModalClose, isOpen}: PropsType) => {
    const {t} = useTranslation()

    return (
        <Modal handleClose={handleModalClose} isOpen={isOpen} title={t.auth.modal.title}>
            <RegistrationModalWrapper>
                <div>
                    {t.auth.modal.description}
                    <span>{email}</span>
                </div>
                <Button onClick={handleModalClose}>{t.auth.modal.btn}</Button>
            </RegistrationModalWrapper>
        </Modal>
    )
}
