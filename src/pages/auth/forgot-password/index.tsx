import {useTranslation} from 'shared/hooks/useTranslation'
import {InputText} from 'shared/ui/InputText/InputText'
import {useAppSelector} from 'shared/hooks/reduxHooks'
import React, {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useForgotPasswordMutation} from 'redux/api/authAPI'
import {PATH} from 'shared/constants/PATH'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {ForgotPasswordStyled} from 'shared/styles/ForgotPasswordPage'
import {Button} from 'shared/ui/Button/Button'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'

type ForgotPasswordFormType = {
    email: string
}
const KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

export default function ForgotPasswordPage() {
    const {t} = useTranslation()
    const theme = useAppSelector(state => state.app.theme)
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email: '',
        },
    })

    const [token, setToken] = useState<string | null>(null)
    const [forgotPassword] = useForgotPasswordMutation()

    const onSubmit: SubmitHandler<ForgotPasswordFormType> = ({email}) => {
        if (token) {
            forgotPassword({email, recaptcha: token})
        }
    }

    return (
        <AuthContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ForgotPasswordStyled>
                    <h1>{t.auth.forgotPassword.title}</h1>
                    <InputText {...register('email')} label={'Email'} />
                    <h2>{t.auth.forgotPassword.description}</h2>
                    <Button type='submit'>{t.auth.forgotPassword.btnFirst}</Button>
                    <Button asT={'a'} href={PATH.LOGIN} variant={'text'}>
                        {t.auth.forgotPassword.link}
                    </Button>
                    <ReCAPTCHA
                        className={'captcha'}
                        sitekey={KEY!}
                        onChange={(token: string | null) => setToken(token)}
                        theme={theme}
                    />
                </ForgotPasswordStyled>
            </form>
        </AuthContainer>
    )
}

ForgotPasswordPage.getLayout = getLayoutWithHeader
