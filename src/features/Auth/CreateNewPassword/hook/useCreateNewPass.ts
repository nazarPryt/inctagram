import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {passwordPattern, passwordPatternError} from '@/features/Auth/Registration/helpers/passwordPattern'
import {PATH} from '@/shared/constants/PATH'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {yupResolver} from '@hookform/resolvers/yup'
import {useRouter} from 'next/router'
import * as yup from 'yup'

import {useCreateNewPasswordMutation} from '../api/createNewPassword.api'

type NewPassType = {
    newPassword: string
    recoveryCode: string
}
const schema = yup.object({
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(6, 'Your password is too short, min 6 characters')
        .max(20, 'Your password is too long, max 20 characters')
        .matches(passwordPattern, passwordPatternError),
    passwordConfirmation: yup
        .string()
        .trim()
        .required('You have to confirm your Password')
        .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})

type FormData = yup.InferType<typeof schema>

export const useCreateNewPassword = (recoveryCode: string) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [askNewPassword, {isLoading}] = useCreateNewPasswordMutation()
    const {
        formState: {errors, isValid},
        handleSubmit,
        reset,
        ...rest
    } = useForm<FormData>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data: FormData) => {
        const toSend: NewPassType = {
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
