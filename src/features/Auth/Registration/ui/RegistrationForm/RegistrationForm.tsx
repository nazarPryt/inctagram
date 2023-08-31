import Link from 'next/link'
import { Controller } from 'react-hook-form'

import { RegistrationCheckboxWrapper } from './RegistrationForm.styled'

import { useRegistrationForm } from 'features/Auth/Registration/hook/UseRegistrationForm'
import { RegistrationModal } from 'features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import GithubIcon from 'shared/assets/icons/githubWhite.svg'
import GoogleIcon from 'shared/assets/icons/google.svg'
import { PATH } from 'shared/constants/PATH'
import { useTranslation } from 'shared/hooks/useTranslation'
import { AuthPageStyled } from 'shared/styles/RegistrationPage'
import { AuthContainer } from 'shared/ui/AuthContainer/AuthContainer'
import { Button } from 'shared/ui/Button/Button'
import { Checkbox } from 'shared/ui/Checkbox/Checkbox'
import { IconButton } from 'shared/ui/IconButton/IconButton'
import { InputPassword } from 'shared/ui/InputPassword/InputPassword'
import { InputText } from 'shared/ui/InputText/InputText'
import { Loader } from 'shared/ui/Loader/Loader'

export const RegistrationForm = (): JSX.Element => {
  const { t } = useTranslation()

  const { isLoading, register, handleSubmit, control, isValid, errors, getValues, isModalOpen, handleModalClose } =
    useRegistrationForm()

  return (
    <AuthContainer>
      {isLoading && <Loader />}
      <AuthPageStyled>
        <h1>{t.auth.signUp.title}</h1>
        <div className="oauthWrapper">
          <IconButton colorful>
            <GoogleIcon />
          </IconButton>
          <IconButton>
            <GithubIcon />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit}>
          <InputText label={t.auth.username} type="text" {...register('userName')} error={errors.userName?.message} />
          <InputText label={t.auth.email} type="email" {...register('email')} error={errors.email?.message} />
          <InputPassword label={t.auth.password} {...register('password')} error={errors.password?.message} />
          <InputPassword
            label={t.auth.confirmPassword}
            {...register('passwordConfirmation')}
            error={errors.passwordConfirmation?.message}
          />
          <RegistrationCheckboxWrapper>
            <Controller
              control={control}
              name="checkbox"
              render={({ field: { onChange, value, ref } }) => (
                <Checkbox ref={ref} checked={value} onChange={onChange} />
              )}
            />
            <p>
              {t.auth.signUp.userAgree}
              <Link href={PATH.TERMS_OF_SERVICE}>{t.auth.signUp.termsOfService}</Link> {t.auth.signUp.and}
              <Link href={PATH.PRIVACY_POLICY}>{t.auth.signUp.privacy}</Link>
            </p>
          </RegistrationCheckboxWrapper>
          <Button disabled={isLoading || !isValid} type="submit">
            {t.auth.signUp.btn}
          </Button>
        </form>
        <p>{t.auth.signUp.description}</p>
        <Button asT="a" href={PATH.LOGIN} variant="text">
          {t.auth.signUp.link}
        </Button>
      </AuthPageStyled>

      <RegistrationModal email={getValues('email')} handleModalClose={handleModalClose} isOpen={isModalOpen} />
    </AuthContainer>
  )
}
