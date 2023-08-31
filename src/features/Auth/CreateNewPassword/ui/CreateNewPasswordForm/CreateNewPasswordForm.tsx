import { useCreateNewPassword } from 'features/Auth/CreateNewPassword/hook/useCreateNewPass'
import { ModalConfirmChangedPassword } from 'features/Auth/CreateNewPassword/ui/ModalConfirmChangedPassword'
import { useTranslation } from 'shared/hooks/useTranslation'
import { AuthPageStyled } from 'shared/styles/RegistrationPage'
import { AuthContainer } from 'shared/ui/AuthContainer/AuthContainer'
import { Button } from 'shared/ui/Button/Button'
import { InputPassword } from 'shared/ui/InputPassword/InputPassword'
import { Loader } from 'shared/ui/Loader'

export const CreateNewPasswordForm = ({ recoveryCode }: { recoveryCode: string }): JSX.Element => {
  const { t } = useTranslation()
  const { handleSubmit, register, errors, isValid, handleModalClose, isOpen, isLoading } = useCreateNewPassword(
    recoveryCode as string
  )

  return (
    <AuthContainer>
      {isLoading && <Loader />}
      <AuthPageStyled>
        <h1>{t.auth.newPassword.title}</h1>
        <form className="createNewPassForm" onSubmit={handleSubmit}>
          <InputPassword label={t.auth.password} {...register('password')} error={errors.password?.message} />
          <InputPassword
            label={t.auth.confirmPassword}
            {...register('passwordConfirmation')}
            error={errors.passwordConfirmation?.message}
          />
          <p>{t.auth.newPassword.description}</p>
          <Button disabled={!isValid} type="submit">
            {t.auth.newPassword.btn}
          </Button>
        </form>
        <ModalConfirmChangedPassword handleModalClose={handleModalClose} isOpen={isOpen} />
      </AuthPageStyled>
    </AuthContainer>
  )
}
