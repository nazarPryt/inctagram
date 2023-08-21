import React from 'react'
import {AuthPageStyled} from 'shared/styles/RegistrationPage'
import {InputPassword} from 'shared/ui/InputPassword/InputPassword'
import {Button} from 'shared/ui/Button/Button'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {useTranslation} from 'shared/hooks/useTranslation'
import {useCreateNewPassword} from 'features/Auth/CreateNewPassword/hook/useCreateNewPass'

import {Loader} from 'shared/ui/Loader'
import {ModalConfirmChangedPassword} from 'features/Auth/CreateNewPassword/ui/ModalConfirmChangedPassword'

export const CreateNewPasswordForm = ({recoveryCode}: {recoveryCode: string}) => {
    const {t} = useTranslation()
    const {handleSubmit, register, errors, isValid, handleModalClose, isOpen, isLoading} = useCreateNewPassword(
        recoveryCode as string
    )

    return (
        <AuthContainer>
            {isLoading && <Loader />}
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
                    <Button type={'submit'} disabled={!isValid}>
                        {t.auth.newPassword.btn}
                    </Button>
                </form>
                <ModalConfirmChangedPassword handleModalClose={handleModalClose} isOpen={isOpen} />
            </AuthPageStyled>
        </AuthContainer>
    )
}