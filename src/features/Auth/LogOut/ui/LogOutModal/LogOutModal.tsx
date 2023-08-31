import { useSession } from 'next-auth/react'

import { useLogOut } from 'features/Auth/LogOut/hook/useLogOut'
import { LogOutIcon } from 'features/Auth/LogOut/ui/icons/LogOutIcon'
import { LogOutModalWrapper } from 'features/Auth/LogOut/ui/LogOutModal/LogOutModal.styled'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { NavButton } from 'widgets/Aside/ui/NavButton/NavButton'

export const LogOutModal = (): JSX.Element => {
  const { t } = useTranslation()
  const { data } = useSession()
  const { handleCloseModal, handleModalOpen, handleLogOut, isOpen } = useLogOut()

  return (
    <>
      <NavButton icon={<LogOutIcon />} title={t.aside.logout} onClick={handleModalOpen} />

      <Modal handleClose={handleCloseModal} isOpen={isOpen} title={t.generalInfo.logoutModal.title}>
        <LogOutModalWrapper>
          <p>
            {t.generalInfo.logoutModal.description}
            <br /> <span>{data?.user?.email}</span>?
          </p>
          <div className="buttonsWrapper">
            <Button variant="outlined" onClick={handleLogOut}>
              {t.generalInfo.logoutModal.yes}
            </Button>
            <Button onClick={handleCloseModal}>{t.generalInfo.logoutModal.no}</Button>
          </div>
        </LogOutModalWrapper>
      </Modal>
    </>
  )
}
