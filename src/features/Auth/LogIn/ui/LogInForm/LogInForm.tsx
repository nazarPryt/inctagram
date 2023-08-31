import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

import { useLogIn } from 'features/Auth/LogIn/hook/UseLogIn'
import GithubWhite from 'shared/assets/icons/githubWhite.svg'
import GoogleIcon from 'shared/assets/icons/google.svg'
import { PATH } from 'shared/constants/PATH'
import { useTranslation } from 'shared/hooks/useTranslation'
import { AuthPageStyled } from 'shared/styles/RegistrationPage'
import { AuthContainer } from 'shared/ui/AuthContainer/AuthContainer'
import { Button } from 'shared/ui/Button/Button'
import { IconButton } from 'shared/ui/IconButton/IconButton'
import { InputPassword } from 'shared/ui/InputPassword/InputPassword'
import { InputText } from 'shared/ui/InputText/InputText'

export const LogInForm = (): JSX.Element => {
  const { status } = useSession()
  const router = useRouter()
  const { register, handleSubmit, isLoading, errors, isValid } = useLogIn()
  const { t } = useTranslation()

  if (status === 'authenticated') {
    router.push(PATH.HOME)
  }

  return (
    <AuthContainer>
      <AuthPageStyled>
        <h1>{t.auth.signIn.title}</h1>
        <div className="oauthWrapper">
          <IconButton colorful disabled={isLoading} onClick={() => signIn('google')}>
            <GoogleIcon />
          </IconButton>
          <IconButton disabled={isLoading} onClick={() => signIn('github')}>
            <GithubWhite />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit}>
          <InputText label={t.auth.email} type="email" {...register('email')} error={errors.email?.message} />
          <InputPassword label={t.auth.password} {...register('password')} error={errors.password?.message} />
          <Link className="link" href={PATH.FORGOT_PASSWORD}>
            {t.auth.signIn.linkFirst}
          </Link>
          <Button disabled={!isValid || isLoading} type="submit">
            {t.auth.signIn.button}
          </Button>
        </form>
        <p>{t.auth.signIn.description}</p>
        <Button asT="a" href={PATH.REGISTRATION} variant="text">
          {t.auth.signIn.linkSecond}
        </Button>
      </AuthPageStyled>
    </AuthContainer>
  )
}
