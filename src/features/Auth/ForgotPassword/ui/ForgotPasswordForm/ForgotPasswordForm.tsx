import ReCAPTCHA from 'react-google-recaptcha'

import { useForgotPassword } from 'features/Auth/ForgotPassword/hook/useForgotPassword'
import { ForgotPasswordWrapper } from 'features/Auth/ForgotPassword/ui/ForgotPasswordForm/ForgotPasswordForm.styled'
import { RegistrationModal } from 'features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import { PATH } from 'shared/constants/PATH'
import { useAppSelector } from 'shared/hooks/reduxHooks'
import { useTranslation } from 'shared/hooks/useTranslation'
import { AuthContainer } from 'shared/ui/AuthContainer/AuthContainer'
import { Button } from 'shared/ui/Button/Button'
import { InputText } from 'shared/ui/InputText/InputText'
import { Loader } from 'shared/ui/Loader/Loader'

export const ForgotPasswordForm = (): JSX.Element => {
  const KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY
  const { t } = useTranslation()
  const theme = useAppSelector(state => state.app.theme)

  const { handleSubmit, register, errors, isLoading, handleChangeCaptcha, token, isOpen, handleModalClose, email } =
    useForgotPassword()

  return (
    <AuthContainer>
      <ForgotPasswordWrapper onSubmit={handleSubmit}>
        {isLoading && <Loader />}
        <h1>{t.auth.forgotPassword.title}</h1>
        <InputText {...register('email')} error={errors.email?.message} label="Email" />
        <p>{t.auth.forgotPassword.description}</p>
        <Button fullwidth disabled={!token} type="submit">
          {t.auth.forgotPassword.btnFirst}
        </Button>
        <Button asT="a" href={PATH.LOGIN} variant="text">
          {t.auth.forgotPassword.link}
        </Button>
        <ReCAPTCHA sitekey={KEY!} theme={theme} onChange={handleChangeCaptcha} />
      </ForgotPasswordWrapper>
      <RegistrationModal email={email} handleModalClose={handleModalClose} isOpen={isOpen} />
    </AuthContainer>
  )
}
