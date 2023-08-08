'use client'
import LogoutIcon from 'features/LogOut/logout.svg'
import React, {useState} from 'react'
import {useTranslation} from 'shared/hooks/useTranslation'
import {Modal} from 'shared/ui/Modal/Modal'
import {LogOutModalWrapper} from 'features/LogOut/LogOut.styled'
import {useLogOutMutation} from 'redux/api/authAPI'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {signOut, useSession} from 'next-auth/react'
import {NavButton} from 'widgets/Aside/ui/NavButton/NavButton'
import {accessToken} from 'shared/constants/constants'
import cookie from 'react-cookies'
import {Button} from 'shared/ui/Button/Button'

export const LogOut = () => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const {data} = useSession()
    const [showModal, setShowModal] = useState(false)
    const [logOut] = useLogOutMutation()

    const onLogOut = async () => {
        await logOut()
            .unwrap()
            .then(async () => {
                cookie.remove(accessToken)
                setShowModal(false)
                await signOut()
            })
            .catch(error => {
                console.log(error)
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'error', message: 'Something went wrong, Try again please!!'},
                    })
                )
            })
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    return (
        <>
            <NavButton title={t.aside.logout} icon={<LogoutIcon />} onClick={() => setShowModal(true)} />

            <Modal isOpen={showModal} title={t.generalInfo.logoutModal.title} handleClose={handleCloseModal}>
                <LogOutModalWrapper>
                    <p>
                        {t.generalInfo.logoutModal.description}
                        <br /> <span>{data?.user.email}</span>?
                    </p>
                    <div className={'buttonsWrapper'}>
                        <Button variant={'outlined'} onClick={onLogOut}>
                            {t.generalInfo.logoutModal.yes}
                        </Button>
                        <Button onClick={handleCloseModal}>{t.generalInfo.logoutModal.no}</Button>
                    </div>
                </LogOutModalWrapper>
            </Modal>
        </>
    )
}
