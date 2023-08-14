import React, {useState} from 'react'
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
import {RegistrationTerms} from 'features/Auth/Registration/ui/RegistrationTerms/RegistrationTerms'
import {RegistrationModal} from 'features/Auth/Registration/ui/RegistrationModal/RegistrationModal'

export const RegistrationForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {isLoading, register, handleSubmit, errors, getValues, reset} = useRegistrationForm(setIsModalOpen)
    const {t} = useTranslation()
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    const handleModalClose = () => {
        setIsModalOpen(false)
        reset()
    }
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
                    <RegistrationTerms isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
                    <Button type={'submit'} disabled={isLoading || !isChecked}>
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
