import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {zodResolver} from '@hookform/resolvers/zod'

import {useForgotPasswordMutation} from '../api/forgotPassword.api'
import {ForgotPasswordFormData, createForgotPasswordSchema} from '../helpers/forgotPassword.schema'

export const useForgotPassword = () => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    const [token, setToken] = useState<null | string>(null)
    const [isOpen, setIsModalOpen] = useState(false)
    const [forgotPassword, {isLoading}] = useForgotPasswordMutation()

    const {
        formState: {errors, isValid},
        getValues,
        handleSubmit,
        reset,
        setError,
        setValue,
        ...rest
    } = useForm<ForgotPasswordFormData>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(createForgotPasswordSchema(t)),
    })
    const onSubmit = async (data: ForgotPasswordFormData) => {
        forgotPassword(data)
            .unwrap()
            .then(() => {
                setIsModalOpen(true)
            })
            .catch(error => {
                console.log(error)
                if (error.data.messages[0].field === 'email') {
                    setError('email', {
                        message: t.errors.emailWasntFound(data.email),
                        type: 'manual',
                    })
                } else {
                    dispatch(
                        SetAppNotificationAC({
                            notifications: {message: 'Something went wrong, Try again please!!', type: 'error'},
                        })
                    )
                }
            })
    }
    const handleModalClose = () => {
        setIsModalOpen(false)
        reset()
    }
    const handleChangeCaptcha = (value: null | string) => {
        setToken(value)
        setValue('recaptcha', value!)
    }
    const email = getValues('email')

    return {
        email,
        errors,
        handleChangeCaptcha,
        handleModalClose,
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        isOpen,
        isValid,
        token,
        ...rest,
    }
}
