'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import timeManagement from '../../../shared/assets/pictures/timeManagement.png'
import {useResendConfirmationLinkMutation} from 'redux/api/authAPI'
import {Modal} from '../../../shared/ui/Modal/Modal'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useRouter, useSearchParams} from 'next/navigation'
import {Loader} from '../../../shared/ui/Loader/Loader'
import {PATH} from 'shared/constants/PATH'
import {EmailResendWrapper} from 'shared/styles/EmailResendPage'
import {RegistrationModalContent} from 'shared/styles/RegistrationPage'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {AuthContainer} from '../../../shared/ui/AuthContainer/AuthContainer'
import {Button} from '../../../shared/ui/Button/Button'

export default function EmailResendingPage() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [resend, {isLoading}] = useResendConfirmationLinkMutation()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const email = useSearchParams().get('email') as string

    const handleModalClose = () => {
        setIsModalOpen(false)
        router.replace(PATH.LOGIN)
    }

    const handleResend = () => {
        resend({email})
            .unwrap()
            .then(() => setIsModalOpen(true))
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }

    return (
        <AuthContainer>
            {isLoading && <Loader />}
            <EmailResendWrapper>
                <h1>Email verification link expired</h1>
                <p>Looks like the verification link has expired. Not to worry, we can send the link again</p>
                <Button onClick={handleResend} disabled={isLoading}>
                    Resend verification link
                </Button>
                <span>
                    <Image src={timeManagement} alt={'timeManagement picture'} />
                </span>
            </EmailResendWrapper>
            <Modal handleClose={handleModalClose} isOpen={isModalOpen} title={'Email sent'}>
                <RegistrationModalContent>
                    <div>
                        We have sent a link to confirm your email to <span>{email}</span>
                    </div>
                    <Button onClick={handleModalClose}>OK</Button>
                </RegistrationModalContent>
            </Modal>
        </AuthContainer>
    )
}
EmailResendingPage.getLayout = getLayoutWithHeader
