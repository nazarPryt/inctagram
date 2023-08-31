import { ModalConfirmChangedPasswordWrapper } from './ModalConfirmChangedPassword.styled'

import { useTranslation } from 'shared/hooks/useTranslation'
import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

type PropsType = {
  isOpen: boolean
  handleModalClose: () => void
}
export const ModalConfirmChangedPassword = ({ handleModalClose, isOpen }: PropsType): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Modal handleClose={handleModalClose} isOpen={isOpen} title="New Password">
      <ModalConfirmChangedPasswordWrapper>
        <p>{t.auth.newPassword.modal}</p>
        <Button onClick={handleModalClose}>{t.auth.modal.btn}</Button>
      </ModalConfirmChangedPasswordWrapper>
    </Modal>
  )
}
