import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {PATH} from '@/_app/AppSettings/PATH'
import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'next/router'

import {useCreateNewPasswordMutation} from '../api/createNewPassword.api'
import {NewPasswordRequestType} from '../api/createNewPassword.types'
import {createNewPasswordFormData, createNewPasswordSchema} from '../helpers/createNewPassword.schema'

export const useCreateNewPassword = (recoveryCode: string) => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [askNewPassword, {isLoading}] = useCreateNewPasswordMutation()
    const {
        formState: {errors, isValid},
        handleSubmit,
        reset,
        ...rest
    } = useForm<createNewPasswordFormData>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(createNewPasswordSchema(t)),
    })
    const onSubmit = async (data: createNewPasswordFormData) => {
        const toSend: NewPasswordRequestType = {
            newPassword: data.password,
            recoveryCode,
        }

        askNewPassword({...toSend})
            .unwrap()
            .then(() => {
                setIsOpen(true)
            })
            .catch(() => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: 'Something went wrong, Try again please!!', type: 'error'},
                    })
                )
            })
    }

    const handleModalClose = () => {
        setIsOpen(false)
        reset()
        router.replace(PATH.LOGIN)
    }

    return {
        errors,
        handleModalClose,
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        isOpen,
        isValid,
        ...rest,
    }
}
