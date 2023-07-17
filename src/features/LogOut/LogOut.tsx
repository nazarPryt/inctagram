'use client'
import LogoutIcon from 'features/LogOut/logout.svg'
import React, {useState} from 'react'
import {Modal} from 'shared/components/Modal/BaseModal'
import {LogOutModalWrapper} from 'features/LogOut/LogOut.styled'
import {useLogOutMutation} from 'redux/api/authAPI'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {signOut, useSession} from 'next-auth/react'
import {Button} from 'shared/components/Button/Button'

export const LogOut = () => {
    const dispatch = useAppDispatch()
    const {data} = useSession()
    const [showModal, setShowModal] = useState(false)
    const [logOut] = useLogOutMutation()

    const onLogOut = async () => {
        await signOut()
        await logOut()
            .unwrap()
            .catch(error => {
                console.log(error)
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'error', message: 'Something went wrong, Try again please!!'},
                    })
                )
            })
        setShowModal(false)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    return (
        <>
            <Button onClick={() => setShowModal(true)} variant={'isIcon'}>
                <LogoutIcon />
                Log Out
            </Button>
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
