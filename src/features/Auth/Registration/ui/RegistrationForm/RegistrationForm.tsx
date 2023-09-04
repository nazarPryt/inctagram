import React from 'react'
import {Loader} from 'shared/ui/Loader/Loader'
import {AuthPageStyled} from 'shared/styles/RegistrationPage'
import {IconButton} from 'shared/ui/IconButton/IconButton'
import GoogleIcon from 'shared/assets/icons/google.svg'
import GithubIcon from 'shared/assets/icons/githubWhite.svg'
import {InputText} from 'shared/ui/InputText/InputText'
import {InputPassword} from 'shared/ui/InputPassword/InputPassword'
import {PATH} from 'shared/constants/PATH'
import {useRegistrationForm} from 'features/Auth/Registration/hook/UseRegistrationForm'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {useTranslation} from 'shared/hooks/useTranslation'
import {Button} from 'shared/ui/Button/Button'
import {RegistrationModal} from 'features/Auth/Registration/ui/RegistrationModal/RegistrationModal'
import {Controller} from 'react-hook-form'
import {Checkbox} from 'shared/ui/Checkbox/Checkbox'
import Link from 'next/link'
import {RegistrationCheckboxWrapper} from './RegistrationForm.styled'

export const RegistrationForm = () => {
    const {t} = useTranslation()

    const {isLoading, register, handleSubmit, control, isValid, errors, getValues, isModalOpen, handleModalClose} =
        useRegistrationForm()

    return (
        <AuthContainer>
            {isLoading && <Loader />}
            <AuthPageStyled>
                <h1>{t.auth.signUp.title}</h1>
                <div className={'oauthWrapper'}>
                    <IconButton colorful>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton>
                        <GithubIcon />
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <InputText
                        label={t.auth.username}
                        type={'text'}
                        {...register('userName')}
                        error={errors.userName?.message}
                    />
                    <InputText
                        label={t.auth.email}
                        type={'email'}
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <InputPassword label={t.auth.password} {...register('password')} error={errors.password?.message} />
                    <InputPassword
                        label={t.auth.confirmPassword}
                        {...register('passwordConfirmation')}
                        error={errors.passwordConfirmation?.message}
                    />
                    <RegistrationCheckboxWrapper>
                        <Controller
                            control={control}
                            name='checkbox'
                            render={({field: {onChange, value, ref}}) => (
                                <Checkbox checked={value} ref={ref} onChange={onChange} />
                            )}
                        />
                        <p>
                            {t.auth.signUp.userAgree}
                            <Link href={PATH.TERMS_OF_SERVICE}>{t.auth.signUp.termsOfService}</Link> {t.auth.signUp.and}
                            <Link href={PATH.PRIVACY_POLICY}>{t.auth.signUp.privacy}</Link>
                        </p>
                    </RegistrationCheckboxWrapper>
                    <Button type={'submit'} disabled={isLoading || !isValid}>
                        {t.auth.signUp.btn}
                    </Button>
                </form>
                <p>{t.auth.signUp.description}</p>
                <Button asT={'a'} variant={'text'} href={PATH.LOGIN}>
                    {t.auth.signUp.link}
                </Button>
            </AuthPageStyled>

            <RegistrationModal isOpen={isModalOpen} handleModalClose={handleModalClose} email={getValues('email')} />
        </AuthContainer>
    )
}
