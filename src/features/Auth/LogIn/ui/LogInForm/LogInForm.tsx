import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {useTranslation} from 'shared/hooks/useTranslation'
import {AuthPageStyled} from 'shared/styles/RegistrationPage'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {Button} from 'shared/ui/Button/Button'
import {IconButton} from 'shared/ui/IconButton/IconButton'
import {InputPassword} from 'shared/ui/InputPassword/InputPassword'
import {InputText} from 'shared/ui/InputText/InputText'
import GoogleIcon from 'shared/assets/icons/google.svg'
import GithubWhite from 'shared/assets/icons/githubWhite.svg'
import {useLogIn} from 'features/Auth/LogIn/hook/UseLogIn'

export const LogInForm = () => {
    const {register, handleSubmit, isLoading, errors, isValid} = useLogIn()
    const {t} = useTranslation()

    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>{t.auth.signIn.title}</h1>
                <div className={'oauthWrapper'}>
                    <IconButton onClick={() => {}} disabled={isLoading} colorful>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton onClick={() => {}} disabled={isLoading}>
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
