import React from 'react'
import {AuthPageStyled} from 'shared/styles/RegistrationPage'
import {InputPassword} from 'shared/ui/InputPassword/InputPassword'
import {Button} from 'shared/ui/Button/Button'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {useTranslation} from 'shared/hooks/useTranslation'
import {useCreateNewPasswordForm} from 'features/Auth/CreateNewPasswordForm/useCreateNewPassForm'

export const CreateNewPasswordForm = () => {
    const {t} = useTranslation()
    const {handleSubmit, register, errors} = useCreateNewPasswordForm()

    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>{t.auth.newPassword.title}</h1>
                <form onSubmit={handleSubmit} className={'createNewPassForm'}>
                    <InputPassword label={t.auth.password} {...register('password')} error={errors.password?.message} />
                    <InputPassword
                        label={t.auth.confirmPassword}
                        {...register('passwordConfirmation')}
                        error={errors.passwordConfirmation?.message}
                    />
                    <p>{t.auth.newPassword.description}</p>
                    <Button type={'submit'} disabled={false}>
                        {t.auth.newPassword.btn}
                    </Button>
                </form>
            </AuthPageStyled>
        </AuthContainer>
    )
}
