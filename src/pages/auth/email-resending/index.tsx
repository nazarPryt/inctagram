import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {RegistrationModal} from '@/features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import {useResendConfirmationLink} from '@/features/Auth/ResendVerificationLink/hook/useResendConfirmationLink'
import {EmailResendWrapper} from '@/features/Auth/ResendVerificationLink/ui/EmailResendPage'
import timeManagement from '@/public/pictures/timeManagement.png'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {AuthContainer, Button, Loader} from '@nazar-pryt/inctagram-ui-kit'
import {NextPageContext} from 'next'
import Image from 'next/image'

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
    const {handleModalClose, handleResend, isLoading, isModalOpen} = useResendConfirmationLink({email})

    return (
        <AuthContainer>
            {isLoading && <Loader />}
            <EmailResendWrapper>
                <h1>{t.auth.signUp.expiredLink.title}</h1>
                <p>{t.auth.signUp.expiredLink.description}</p>
                <Button disabled={isLoading} onClick={handleResend}>
                    {t.auth.signUp.expiredLink.btn}
                </Button>
                <span>
                    <Image alt={'timeManagement picture'} src={timeManagement} />
                </span>
            </EmailResendWrapper>
            <RegistrationModal email={email} handleModalClose={handleModalClose} isOpen={isModalOpen} />
        </AuthContainer>
    )
}
EmailResendingPage.getLayout = getLayoutWithHeader
