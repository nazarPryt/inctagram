import React, {useState} from 'react'
import Image from 'next/image'
import {useTranslation} from 'shared/hooks/useTranslation'
import timeManagement from 'shared/assets/pictures/timeManagement.png'
import {useResendConfirmationLinkMutation} from 'redux/api/authAPI'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useRouter} from 'next/navigation'
import {Loader} from 'shared/ui/Loader/Loader'
import {PATH} from 'shared/constants/PATH'
import {EmailResendWrapper} from 'shared/styles/EmailResendPage'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {Button} from 'shared/ui/Button/Button'
import {RegistrationModal} from 'features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import {NextPageContext} from 'next'

export async function getServerSideProps(ctx: NextPageContext) {
    const {email} = ctx.query
    return {
        props: {
            email,
        },
    }
}
export default function EmailResendingPage({email}: {email: string}) {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [resend, {isLoading}] = useResendConfirmationLinkMutation()
    const [isModalOpen, setIsModalOpen] = useState(false)

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
                <h1>{t.auth.signUp.expiredLink.title}</h1>
                <p>{t.auth.signUp.expiredLink.description}</p>
                <Button onClick={handleResend} disabled={isLoading}>
                    {t.auth.signUp.expiredLink.btn}
                </Button>
                <span>
                    <Image src={timeManagement} alt={'timeManagement picture'} />
                </span>
            </EmailResendWrapper>
            <RegistrationModal email={email} handleModalClose={handleModalClose} isOpen={isModalOpen} />
        </AuthContainer>
    )
}
EmailResendingPage.getLayout = getLayoutWithHeader
