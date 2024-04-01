import {ElementType} from 'react'

import {useTranslation} from '@/shared/hooks/useTranslation'
import {AuthPageStyled} from '@/shared/styles/RegistrationPage'
import {AuthContainer, Button, Dialog, InputPassword, Loader} from '@nazar-pryt/inctagram-ui-kit'
import dynamic from 'next/dynamic'

import {useCreateNewPassword} from '../../hook/useCreateNewPass'
const DevT: ElementType = dynamic(() => import('@hookform/devtools').then(module => module.DevTool), {ssr: false})

export const CreateNewPasswordForm = ({recoveryCode}: {recoveryCode: string}) => {
    const {t} = useTranslation()
    const {control, errors, handleModalClose, handleSubmit, isLoading, isOpen, isValid, register} =
        useCreateNewPassword(recoveryCode as string)

    return (
        <>
            <AuthContainer>
                {isLoading && <Loader fullScreen />}
                <AuthPageStyled>
                    <h1>{t.auth.newPassword.title}</h1>
                    <form className={'createNewPassForm'} onSubmit={handleSubmit}>
                        <InputPassword
                            label={t.auth.password}
                            {...register('password')}
                            error={errors.password?.message}
                        />
                        <InputPassword
                            label={t.auth.confirmPassword}
                            {...register('passwordConfirmation')}
                            error={errors.passwordConfirmation?.message}
                        />
                        <p>{t.auth.newPassword.description}</p>
                        <Button disabled={!isValid} type={'submit'}>
                            {t.auth.newPassword.btn}
                        </Button>
                    </form>
                </AuthPageStyled>
            </AuthContainer>
            <Dialog
                confirmButtonText={t.auth.modal.btn}
                onClose={handleModalClose}
                onConfirmButtonClick={handleModalClose}
                open={isOpen}
                title={t.auth.newPassword.title}
            >
                {t.auth.newPassword.modal}
            </Dialog>
            <DevT control={control} /> {/* set up the dev tool */}
        </>
    )
}
