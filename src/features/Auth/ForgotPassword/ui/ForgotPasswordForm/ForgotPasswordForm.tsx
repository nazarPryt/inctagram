import {ElementType, useEffect, useRef} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {Controller} from 'react-hook-form'

import {appSettings} from '@/_app/AppSettings'
import {PATH} from '@/_app/AppSettings/PATH'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {AuthContainer, Button, Dialog, InputText, Loader} from '@nazar-pryt/inctagram-ui-kit'
import dynamic from 'next/dynamic'

import {useForgotPassword} from '../../hook/useForgotPassword'
import {ForgotPasswordWrapper} from './ForgotPasswordForm.styled'

const DevT: ElementType = dynamic(() => import('@hookform/devtools').then(module => module.DevTool), {ssr: false})

export const ForgotPasswordForm = () => {
    const KEY = appSettings.RECAPTCHA_KEY
    const {t} = useTranslation()
    const theme = useAppSelector(state => state.app.theme)

    const {control, email, errors, handleModalClose, handleSubmit, isLoading, isOpen, isValid, recaptchaRef, register} =
        useForgotPassword()

    return (
        <>
            <AuthContainer>
                <ForgotPasswordWrapper onSubmit={handleSubmit}>
                    {isLoading && <Loader fullScreen />}
                    <h1>{t.auth.forgotPassword.title}</h1>
                    <InputText {...register('email')} error={errors.email?.message} label={'Email'} />
                    <p>{t.auth.forgotPassword.description}</p>
                    <Button disabled={!isValid || isLoading} fullwidth type={'submit'}>
                        {t.auth.forgotPassword.btnFirst}
                    </Button>
                    <Button asT={'a'} href={PATH.LOGIN} variant={'text'}>
                        {t.auth.forgotPassword.link}
                    </Button>
                    <Controller
                        control={control}
                        name={'recaptcha'}
                        render={({field: {onChange}}) => {
                            return (
                                <ReCAPTCHA
                                    hl={t.currentLanguage}
                                    onChange={onChange}
                                    ref={recaptchaRef}
                                    sitekey={KEY}
                                    theme={theme}
                                />
                            )
                        }}
                    />
                </ForgotPasswordWrapper>
            </AuthContainer>
            <Dialog
                confirmButtonText={t.auth.modal.btn}
                onClose={handleModalClose}
                onConfirmButtonClick={handleModalClose}
                open={isOpen}
                title={t.auth.modal.title}
            >
                {t.auth.modal.description} <i>{email}</i>
            </Dialog>
            <DevT control={control} /> {/* set up the dev tool */}
        </>
    )
}
