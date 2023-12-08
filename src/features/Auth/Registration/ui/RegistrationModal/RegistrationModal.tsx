import {Modal} from 'shared/ui/Modal/Modal'
import {Button} from 'shared/ui/Button/Button'
import {RegistrationModalWrapper} from 'features/Auth/Registration/ui/RegistrationModal/RegistrationModal.styled'
import {useTranslation} from 'shared/hooks/useTranslation'

type PropsType = {
    isOpen: boolean
    email: string
    handleModalClose: () => void
}

export const RegistrationModal = ({isOpen, email, handleModalClose}: PropsType) => {
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
