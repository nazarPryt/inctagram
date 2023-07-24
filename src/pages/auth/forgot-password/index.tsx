'use client'

import {InputText} from 'shared/components/InputText/InputText'
import {useAppSelector} from 'shared/hooks/reduxHooks'
import Link from 'next/link'
import React, {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useForgotPasswordMutation} from 'redux/api/authAPI'
import {PATH} from 'shared/constants/PATH'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {ForgotPasswordStyled} from 'shared/styles/ForgotPasswordPage'
import {Button} from 'shared/components/Button/Button'
import {AuthContainer} from 'shared/components/AuthContainer/AuthContainer'

type ForgotPasswordFormType = {
    email: string
}

export default function ForgotPasswordPage() {
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
                    <h1>Forgot Password</h1>
                    <InputText {...register('email')} label={'Email'} />
                    <h2>Enter your email address and we will send you further instructions</h2>
                    <Button type='submit'>Send Link</Button>
                    <Link href={PATH.LOGIN}>Back to Sign In</Link> TODO
                    <ReCAPTCHA
                        className={'captcha'}
                        sitekey={'6LdEe1gmAAAAAI7O13oex31iSVHR8eV1zutI9nLA'}
                        onChange={(token: string | null) => setToken(token)}
                        theme={theme}
                    />
                </ForgotPasswordStyled>
            </form>
        </AuthContainer>
    )
}

ForgotPasswordPage.getLayout = getLayoutWithHeader
