import {PATH} from '@/_app/AppSettings/PATH'
import {useLogIn} from '@/features/Auth/LogIn/hook/UseLogIn'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {AuthPageStyled} from '@/shared/styles/RegistrationPage'
import {
    AuthContainer,
    Button,
    GitHubIcon,
    GoogleIcon,
    IconButton,
    InputPassword,
    InputText,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

export const LogInForm = () => {
    const {errors, handleSubmit, handleTestAccount, isLoading, isValid, register} = useLogIn()
    const {t} = useTranslation()

    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>{t.auth.signIn.title}</h1>
                <div className={'oauthWrapper'}>
                    <IconButton colorful disabled={isLoading} onClick={() => {}}>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton disabled={isLoading} onClick={() => {}}>
                        <GitHubIcon />
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
                    <div className={'box'}>
                        <Button disabled={!isValid || isLoading} onClick={handleTestAccount}>
                            {t.common.test}
                        </Button>
                        <Link className={'link'} href={PATH.FORGOT_PASSWORD}>
                            {t.auth.signIn.linkFirst}
                        </Link>
                    </div>
                    <Button disabled={!isValid || isLoading} type={'submit'}>
                        {t.auth.signIn.button}
                    </Button>
                </form>
                <p>{t.auth.signIn.description}</p>
                <Button asT={'a'} href={PATH.REGISTRATION} variant={'text'}>
                    {t.auth.signIn.linkSecond}
                </Button>
            </AuthPageStyled>
        </AuthContainer>
    )
}
