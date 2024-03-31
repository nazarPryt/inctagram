import ReCAPTCHA from 'react-google-recaptcha'

import {appSettings} from '@/_app/AppSettings'
import {PATH} from '@/_app/AppSettings/PATH'
import {RegistrationModal} from '@/features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {DevTool} from '@hookform/devtools'
import {AuthContainer, Button, Dialog, InputText, Loader} from '@nazar-pryt/inctagram-ui-kit'

import {useForgotPassword} from '../../hook/useForgotPassword'
import {ForgotPasswordWrapper} from './ForgotPasswordForm.styled'

export const ForgotPasswordForm = () => {
    const KEY = appSettings.RECAPTCHA_KEY
    const {t} = useTranslation()
    const theme = useAppSelector(state => state.app.theme)

    const {
        control,
        email,
        errors,
        handleChangeCaptcha,
        handleModalClose,
        handleSubmit,
        isLoading,
        isOpen,
        isValid,
        register,
    } = useForgotPassword()

    return (
        <>
            <AuthContainer>
                <ForgotPasswordWrapper onSubmit={handleSubmit}>
                    {isLoading && <Loader fullScreen />}
                    <h1>{t.auth.forgotPassword.title}</h1>
                    <InputText {...register('email')} error={errors.email?.message} label={'Email'} />
                    <p>{t.auth.forgotPassword.description}</p>
                    <Button disabled={!isValid} fullwidth type={'submit'}>
                        {t.auth.forgotPassword.btnFirst}
                    </Button>
                    <Button asT={'a'} href={PATH.LOGIN} variant={'text'}>
                        {t.auth.forgotPassword.link}
                    </Button>
                    <ReCAPTCHA {...register('recaptcha')} onChange={handleChangeCaptcha} sitekey={KEY} theme={theme} />
                </ForgotPasswordWrapper>
                {/*<RegistrationModal email={email} handleModalClose={handleModalClose} isOpen={isOpen} />*/}
                <Dialog
                    confirmButtonText={t.auth.modal.btn}
                    onConfirmButtonClick={handleModalClose}
                    open={isOpen}
                    title={t.auth.modal.title}
                >
                    <p>{t.auth.modal.description}</p>
                </Dialog>
            </AuthContainer>
            <DevTool control={control} /> {/* set up the dev tool */}
        </>
    )
}
