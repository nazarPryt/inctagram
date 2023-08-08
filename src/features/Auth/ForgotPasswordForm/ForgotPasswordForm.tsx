import React from 'react'
import {ForgotPasswordStyled} from 'shared/styles/ForgotPasswordPage'
import {InputText} from 'shared/ui/InputText/InputText'
import {Button} from 'shared/ui/Button/Button'
import {PATH} from 'shared/constants/PATH'
import ReCAPTCHA from 'react-google-recaptcha'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {useTranslation} from 'shared/hooks/useTranslation'
import {useAppSelector} from 'shared/hooks/reduxHooks'
import {useForgotPasswordForm} from 'features/Auth/ForgotPasswordForm/useForgotPasswordForm'
import {Loader} from 'shared/ui/Loader/Loader'

export const ForgotPasswordForm = () => {
    const KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY
    const {t} = useTranslation()
    const theme = useAppSelector(state => state.app.theme)

    const {handleSubmit, register, errors, isLoading, handleChangeCaptcha, token} = useForgotPasswordForm()

    return (
        <AuthContainer>
            <ForgotPasswordStyled onSubmit={handleSubmit}>
                {isLoading && <Loader />}
                <h1>{t.auth.forgotPassword.title}</h1>
                <InputText {...register('email')} label={'Email'} error={errors.email?.message} />
                <p>{t.auth.forgotPassword.description}</p>
                <Button type='submit' disabled={!token} fullwidth>
                    {t.auth.forgotPassword.btnFirst}
                </Button>
                <Button asT={'a'} href={PATH.LOGIN} variant={'text'}>
                    {t.auth.forgotPassword.link}
                </Button>
                <ReCAPTCHA sitekey={KEY!} onChange={handleChangeCaptcha} theme={theme} />
            </ForgotPasswordStyled>
        </AuthContainer>
    )
}
