'use client'
import LogoutIcon from 'features/LogOut/logout.svg'
import React, {useState} from 'react'
import {Modal} from 'shared/components/Modal/Modal'
import {LogOutModalWrapper} from 'features/LogOut/LogOut.styled'
import {useLogOutMutation} from 'redux/api/authAPI'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {signOut, useSession} from 'next-auth/react'
import {Button} from 'shared/components/Button/Button'
import {NavButton} from 'widgets/Aside/ui/NavButton/NavButton'
import {accessToken} from 'shared/constants/constants'
import cookie from 'react-cookies'

export const LogOut = () => {
    const dispatch = useAppDispatch()
    const {data} = useSession()
    const [showModal, setShowModal] = useState(false)
    const [logOut] = useLogOutMutation()

    const onLogOut = async () => {
        await signOut()
        await logOut()
            .unwrap()
            .then(async () => {
                await cookie.remove(accessToken)
                setShowModal(false)
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
            <NavButton title={'Log Out'} icon={<LogoutIcon />} onClick={() => setShowModal(true)} />

            <Modal isOpen={showModal} title={'Log Out'} handleClose={handleCloseModal}>
                <LogOutModalWrapper>
                    <p>
                        Do you really want to log out of your account
                        <br /> <span>{data?.user.email}</span>?
                    </p>
                    <div className={'buttonsWrapper'}>
                        <Button variant={'outlined'} onClick={onLogOut}>
                            Yes
                        </Button>
                        <Button onClick={handleCloseModal}>No</Button>
                    </div>
                </LogOutModalWrapper>
            </Modal>
        </>
    )
}
