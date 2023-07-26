import React from 'react'
import {AuthPageStyled} from 'shared/styles/RegistrationPage'
import {IconButton} from 'shared/components/IconButton/IconButton'
import {signIn, useSession} from 'next-auth/react'
import GoogleIcon from 'common/assets/icons/google.svg'
import GithubWhite from 'common/assets/icons/githubWhite.svg'
import {InputText} from 'shared/components/InputText/InputText'
import {InputPassword} from 'shared/components/InputPassword/InputPassword'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {useRouter} from 'next/navigation'
import {useLoginForm} from 'features/auth/LoginForm/UseLoginForm'
import {AuthContainer} from 'shared/components/AuthContainer/AuthContainer'
import {Button} from 'shared/components/Button/Button'
import {useTranslation} from '../../../common/hooks/useTranslation'

export const LoginForm = () => {
    const {status} = useSession()
    const router = useRouter()
    const {register, handleSubmit, isLoading, errors} = useLoginForm()
    const {t} = useTranslation()

    const handleRedirectOnRegistration = () => {
        router.push(PATH.REGISTRATION)
    }

    if (status === 'authenticated') {
        router.push(PATH.HOME)
    }

    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>{t.auth_sign_in_title}</h1>
                <div>
                    <IconButton onClick={() => signIn('google')} disabled={isLoading} colorful='true'>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton onClick={() => signIn('github')} disabled={isLoading}>
                        <GithubWhite />
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <InputText
                        label={t.auth_email}
                        type={'email'}
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <InputPassword label={t.auth_password} {...register('password')} error={errors.password?.message} />
                    <Link href={PATH.FORGOT_PASSWORD}>{t.auth_sign_in_forgot_password}</Link>
                    <Button type={'submit'} disabled={isLoading}>
                        {t.auth_sign_in_title}
                    </Button>
                    <p>{t.auth_sign_in_description}</p>
                    <Button
                        type={'button'}
                        variant={'text'}
                        onClick={handleRedirectOnRegistration}
                        disabled={isLoading}
                    >
                        {t.auth_sign_up_title}
                    </Button>
                </form>
            </AuthPageStyled>
        </AuthContainer>
    )
}
