import Image from 'next/image'

import { getLayoutWithHeader } from '_app/Layouts/unauthorized/Unauthorized'
import congratulation from 'shared/assets/pictures/congratulation.png'
import { PATH } from 'shared/constants/PATH'
import { useTranslation } from 'shared/hooks/useTranslation'
import { ConfirmationPageWrapper } from 'shared/styles/RegistrationConfirmPage'
import { AuthContainer } from 'shared/ui/AuthContainer/AuthContainer'
import { Button } from 'shared/ui/Button/Button'

export default function ConfirmedRegistrationPage(): JSX.Element {
  const { t } = useTranslation()

  return (
    <AuthContainer>
      <ConfirmationPageWrapper>
        <h1>{t.auth.signUp.success.title}</h1>
        <p>{t.auth.signUp.success.description}</p>
        <Button asT="a" href={PATH.LOGIN} variant="primary">
          {t.auth.signUp.success.btn}
        </Button>
        <span>
          <Image alt="congratulation" src={congratulation} />
        </span>
      </ConfirmationPageWrapper>
    </AuthContainer>
  )
}
ConfirmedRegistrationPage.getLayout = getLayoutWithHeader
