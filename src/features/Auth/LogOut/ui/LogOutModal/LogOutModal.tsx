import {useLogOut} from '@/features/Auth/LogOut/hook/useLogOut'
import {LogOutModalWrapper} from '@/features/Auth/LogOut/ui/LogOutModal/LogOutModal.styled'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Dialog, LogOutIcon, NavButton} from '@nazar-pryt/inctagram-ui-kit'

export const LogOutModal = () => {
    const userEmail = useAppSelector(state => state.userAuth.email)
    const {t} = useTranslation()
    const {handleCloseModal, handleLogOut, handleModalOpen, isOpen} = useLogOut()

    return (
        <>
            <NavButton icon={<LogOutIcon />} onClick={handleModalOpen} title={t.aside.logout} />

            <Dialog
                cancelButtonText={t.generalInfo.logoutModal.no}
                confirmButtonText={t.generalInfo.logoutModal.yes}
                onCancelButtonClick={handleCloseModal}
                onClose={handleCloseModal}
                onConfirmButtonClick={handleLogOut}
                open={isOpen}
                size={'sm'}
                title={t.generalInfo.logoutModal.title}
            >
                <LogOutModalWrapper>
                    {t.generalInfo.logoutModal.description}
                    <br /> <span>{userEmail}</span>?
                </LogOutModalWrapper>
            </Dialog>
        </>
    )
}
