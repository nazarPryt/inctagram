import {Controller} from 'react-hook-form'

import {PATH} from '@/_app/AppSettings/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {AuthPageStyled} from '@/shared/styles/RegistrationPage'
import {
    AuthContainer,
    Button,
    Checkbox,
    GitHubIcon,
    GoogleIcon,
    IconButton,
    InputPassword,
    InputText,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {useRegistrationForm} from '../../hook/UseRegistrationForm'
import {RegistrationModal} from '../../ui/RegistrationModal/RegistrationModal'
import {RegistrationCheckboxWrapper} from './RegistrationForm.styled'

export const RegistrationForm = () => {
    const {t} = useTranslation()

    const {control, errors, getValues, handleModalClose, handleSubmit, isLoading, isModalOpen, isValid, register} =
        useRegistrationForm()

    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>{t.auth.signUp.title}</h1>
                <div className={'oauthWrapper'}>
                    <IconButton colorful>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon />
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
                            name={'checkbox'}
                            render={({field: {onChange, ref, value}}) => (
                                <Checkbox checked={value} onChange={onChange} ref={ref} />
                            )}
                        />
                        <p>
                            {t.auth.signUp.userAgree}
                            <Link href={PATH.TERMS_OF_SERVICE}>{t.auth.signUp.termsOfService}</Link> {t.auth.signUp.and}
                            <Link href={PATH.PRIVACY_POLICY}>{t.auth.signUp.privacy}</Link>
                        </p>
                    </RegistrationCheckboxWrapper>
                    <Button disabled={isLoading || !isValid} type={'submit'}>
                        {t.auth.signUp.btn}
                    </Button>
                </form>
                <p>{t.auth.signUp.description}</p>
                <Button asT={'a'} href={PATH.LOGIN} variant={'text'}>
                    {t.auth.signUp.link}
                </Button>
            </AuthPageStyled>

            <RegistrationModal email={getValues('email')} handleModalClose={handleModalClose} isOpen={isModalOpen} />
        </AuthContainer>
    )
}
