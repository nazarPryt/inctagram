import {useTranslation} from '@/shared/hooks/useTranslation'
import {Dialog} from '@nazar-pryt/inctagram-ui-kit'

import {RegistrationModalWrapper} from './RegistrationModal.styled'

type PropsType = {
    email: string
    handleModalClose: () => void
    isOpen: boolean
}

export const RegistrationModal = ({email, handleModalClose, isOpen}: PropsType) => {
    const {t} = useTranslation()

    return (
        <Dialog
            confirmButtonText={t.auth.modal.btn}
            onClose={handleModalClose}
            onConfirmButtonClick={handleModalClose}
            open={isOpen}
            size={'sm'}
            title={t.auth.modal.title}
        >
            <RegistrationModalWrapper>
                {t.auth.modal.description}
                <span>{email}</span>
            </RegistrationModalWrapper>
        </Dialog>
    )
}
