import ReCAPTCHA from 'react-google-recaptcha'

import {appSettings} from '@/_app/AppSettings'
import {PATH} from '@/_app/AppSettings/PATH'
import {RegistrationModal} from '@/features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {AuthContainer, Button, InputText, Loader} from '@nazar-pryt/inctagram-ui-kit'

import {useForgotPassword} from '../../hook/useForgotPassword'
import {ForgotPasswordWrapper} from './ForgotPasswordForm.styled'

export const ForgotPasswordForm = () => {
    const KEY = appSettings.RECAPTCHA_KEY
    const {t} = useTranslation()
    const theme = useAppSelector(state => state.app.theme)

    const {email, errors, handleChangeCaptcha, handleModalClose, handleSubmit, isLoading, isOpen, register, token} =
        useForgotPassword()

    return (
        <AuthContainer>
            <ForgotPasswordWrapper onSubmit={handleSubmit}>
                {isLoading && <Loader />}
                <h1>{t.auth.forgotPassword.title}</h1>
                <InputText {...register('email')} error={errors.email?.message} label={'Email'} />
                <p>{t.auth.forgotPassword.description}</p>
                <Button disabled={!token} fullwidth type={'submit'}>
                    {t.auth.forgotPassword.btnFirst}
                </Button>
                <Button asT={'a'} href={PATH.LOGIN} variant={'text'}>
                    {t.auth.forgotPassword.link}
                </Button>
                <ReCAPTCHA onChange={handleChangeCaptcha} sitekey={KEY!} theme={theme} />
            </ForgotPasswordWrapper>
            <RegistrationModal email={email} handleModalClose={handleModalClose} isOpen={isOpen} />
        </AuthContainer>
    )
}
