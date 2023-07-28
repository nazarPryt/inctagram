'use client'
import React, {useState} from 'react'
import {Loader} from '../../../shared/ui/Loader/Loader'
import {AuthPageStyled, RegistrationModalContent} from '../../../shared/styles/RegistrationPage'
import {IconButton} from '../../../shared/ui/IconButton/IconButton'
import GoogleIcon from '../../../shared/assets/icons/google.svg'
import GithubIcon from '../../../shared/assets/icons/githubWhite.svg'
import {InputText} from '../../../shared/ui/InputText/InputText'
import {InputPassword} from '../../../shared/ui/InputPassword/InputPassword'
import Link from 'next/link'
import {PATH} from '../../../shared/constants/PATH'
import {Modal} from '../../../shared/ui/Modal/Modal'
import {useRegistrationForm} from './UseRegistrationForm'
import {AuthContainer} from '../../../shared/ui/AuthContainer/AuthContainer'
import {Button} from '../../../shared/ui/Button/Button'
import {useTranslation} from '../../../shared/hooks/useTranslation'

export const RegistrationForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {isLoading, register, handleSubmit, errors, getValues, reset} = useRegistrationForm(setIsModalOpen)
    const {t} = useTranslation()
    const handleModalClose = () => {
        setIsModalOpen(false)
        reset()
    }
    return (
        <AuthContainer>
            {isLoading && <Loader />}
            <AuthPageStyled>
                <h1>{t.auth_sign_up_title}</h1>
                <div>
                    <IconButton colorful='true'>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton>
                        <GithubIcon />
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <InputText
                        label={t.auth_sign_up_username}
                        type={'text'}
                        {...register('userName')}
                        error={errors.userName?.message}
                    />
                    <InputText
                        label={t.auth_email}
                        type={'email'}
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <InputPassword label={t.auth_password} {...register('password')} error={errors.password?.message} />
                    <InputPassword
                        label={t.auth_confirm_password}
                        {...register('passwordConfirmation')}
                        error={errors.passwordConfirmation?.message}
                    />
                    <Button type={'submit'} disabled={isLoading}>
                        {t.auth_sign_up_title}
                    </Button>
                    <p>{t.auth_sign_up_description}</p>
                    <Link href={PATH.LOGIN}>
                        <Button type={'button'} variant={'text'}>
                            {t.auth_sign_in_title}
                        </Button>
                    </Link>
                </form>
            </AuthPageStyled>
            <Modal handleClose={handleModalClose} isOpen={isModalOpen} title={'Email sent'}>
                <RegistrationModalContent>
                    <div>
                        We have sent a link to confirm your email to <span>{getValues('email')}</span>
                    </div>
                    <Button onClick={handleModalClose}>OK</Button>
                </RegistrationModalContent>
            </Modal>
        </AuthContainer>
    )
}
