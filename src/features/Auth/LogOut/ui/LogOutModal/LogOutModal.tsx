import {useLogOut} from '@/features/Auth/LogOut/hook/useLogOut'
import {LogOutModalWrapper} from '@/features/Auth/LogOut/ui/LogOutModal/LogOutModal.styled'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button, LogOutIcon, Modal, NavButton} from '@nazar-pryt/inctagram-ui-kit'

export const LogOutModal = () => {
    const userEmail = useAppSelector(state => state.userAuth.email)
    const {t} = useTranslation()
    const {handleCloseModal, handleLogOut, handleModalOpen, isOpen} = useLogOut()

    return (
        <>
            <NavButton icon={<LogOutIcon />} onClick={handleModalOpen} title={t.aside.logout} />

            <Modal onClose={handleCloseModal} open={isOpen} title={t.generalInfo.logoutModal.title}>
                <LogOutModalWrapper>
                    <p>
                        {t.generalInfo.logoutModal.description}
                        <br /> <span>{userEmail}</span>?
                    </p>
                    <div className={'buttonsWrapper'}>
                        <Button onClick={handleLogOut} variant={'outlined'}>
                            {t.generalInfo.logoutModal.yes}
                        </Button>
                        <Button onClick={handleCloseModal}>{t.generalInfo.logoutModal.no}</Button>
                    </div>
                </LogOutModalWrapper>
            </Modal>
        </>
    )
}
