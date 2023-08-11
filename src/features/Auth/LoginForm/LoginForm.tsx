import React from 'react'
import {signIn, useSession} from 'next-auth/react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {PATH} from 'shared/constants/PATH'
import {useTranslation} from 'shared/hooks/useTranslation'
import {AuthPageStyled} from 'shared/styles/RegistrationPage'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {Button} from 'shared/ui/Button/Button'
import {IconButton} from 'shared/ui/IconButton/IconButton'
import {InputPassword} from 'shared/ui/InputPassword/InputPassword'
import {InputText} from 'shared/ui/InputText/InputText'
import {useLoginForm} from './UseLoginForm'
import GoogleIcon from 'shared/assets/icons/google.svg'
import GithubWhite from 'shared/assets/icons/githubWhite.svg'

export const LoginForm = () => {
    const {status} = useSession()
    const router = useRouter()
    const {register, handleSubmit, isLoading, errors, isValid} = useLoginForm()
    const {t} = useTranslation()

    if (status === 'authenticated') {
        router.push(PATH.HOME)
    }

    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>{t.auth.signIn.title}</h1>
                <div className={'oauthWrapper'}>
                    <IconButton onClick={() => signIn('google')} disabled={isLoading} colorful>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton onClick={() => signIn('github')} disabled={isLoading}>
                        <GithubWhite />
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <InputText
                        label={t.auth.email}
                        type={'email'}
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <InputPassword label={t.auth.password} {...register('password')} error={errors.password?.message} />
                    <Link className={'link'} href={PATH.FORGOT_PASSWORD}>
                        {t.auth.signIn.linkFirst}
                    </Link>
                    <Button type={'submit'} disabled={!isValid || isLoading}>
                        {t.auth.signIn.button}
                    </Button>
                </form>
                <p>{t.auth.signIn.description}</p>
                <Button asT={'a'} variant={'text'} href={PATH.REGISTRATION}>
                    {t.auth.signIn.linkSecond}
                </Button>
            </AuthPageStyled>
        </AuthContainer>
    )
}
