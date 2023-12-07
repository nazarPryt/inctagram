import Image from 'next/image'
import {useTranslation} from 'shared/hooks/useTranslation'
import timeManagement from 'shared/assets/pictures/timeManagement.png'
import {Loader} from 'shared/ui/Loader/Loader'
import {EmailResendWrapper} from 'features/Auth/ResendVerificationLink/ui/EmailResendPage'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {Button} from 'shared/ui/Button/Button'
import {RegistrationModal} from 'features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import {NextPageContext} from 'next'
import {useResendConfirmationLink} from 'features/Auth/ResendVerificationLink/hook/useResendConfirmationLink'

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
    const {isLoading, handleResend, handleModalClose, isModalOpen} = useResendConfirmationLink({email})

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
