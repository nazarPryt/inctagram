import {NavButton} from 'widgets/Aside/ui/NavButton/NavButton'
import {Modal} from 'shared/ui/Modal/Modal'
import {Button} from 'shared/ui/Button/Button'
import {useTranslation} from 'shared/hooks/useTranslation'
import {useLogOut} from 'features/Auth/LogOut/hook/useLogOut'
import {LogOutModalWrapper} from 'features/Auth/LogOut/ui/LogOutModal/LogOutModal.styled'
import {LogOutIcon} from 'features/Auth/LogOut/ui/icons/LogOutIcon'

export const LogOutModal = () => {
    const {t} = useTranslation()
    const {handleCloseModal, handleModalOpen, handleLogOut, isOpen} = useLogOut()

    return (
        <>
            <NavButton title={t.aside.logout} icon={<LogOutIcon />} onClick={handleModalOpen} />

            <Modal isOpen={isOpen} title={t.generalInfo.logoutModal.title} handleClose={handleCloseModal}>
                <LogOutModalWrapper>
                    <p>
                        {t.generalInfo.logoutModal.description}
                        <br /> <span>user.email</span>?
                    </p>
                    <div className={'buttonsWrapper'}>
                        <Button variant={'outlined'} onClick={handleLogOut}>
                            {t.generalInfo.logoutModal.yes}
                        </Button>
                        <Button onClick={handleCloseModal}>{t.generalInfo.logoutModal.no}</Button>
                    </div>
                </LogOutModalWrapper>
            </Modal>
        </>
    )
}
