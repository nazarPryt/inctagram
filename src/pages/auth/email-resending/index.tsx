import { NextPageContext } from 'next'
import Image from 'next/image'

import { getLayoutWithHeader } from '_app/Layouts/unauthorized/Unauthorized'
import { RegistrationModal } from 'features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import { useResendConfirmationLink } from 'features/Auth/ResendVerificationLink/hook/useResendConfirmationLink'
import { EmailResendWrapper } from 'features/Auth/ResendVerificationLink/ui/EmailResendPage'
import timeManagement from 'shared/assets/pictures/timeManagement.png'
import { useTranslation } from 'shared/hooks/useTranslation'
import { AuthContainer } from 'shared/ui/AuthContainer/AuthContainer'
import { Button } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'

export async function getServerSideProps(ctx: NextPageContext) {
  const { email } = ctx.query

  return {
    props: {
      email,
    },
  }
}

export default function EmailResendingPage({ email }: { email: string }) {
  const { t } = useTranslation()
  const { isLoading, handleResend, handleModalClose, isModalOpen } = useResendConfirmationLink({ email })

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
          <Image alt="timeManagement picture" src={timeManagement} />
        </span>
      </EmailResendWrapper>
      <RegistrationModal email={email} handleModalClose={handleModalClose} isOpen={isModalOpen} />
    </AuthContainer>
  )
}
EmailResendingPage.getLayout = getLayoutWithHeader
