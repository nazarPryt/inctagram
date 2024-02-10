import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {useForgotPasswordMutation} from '@/features/Auth/ForgotPassword/api/forgotPassword.api'
import {emailPattern} from '@/features/Auth/Registration/helpers/emailPattern'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '@/shared/store/appSlice'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().trim().required('Email is required').matches(emailPattern, 'email is not valid'),
    recaptcha: yup.string().nonNullable().trim().required('Token is required'),
})

type FormData = yup.InferType<typeof schema>

export const useForgotPassword = () => {
    const dispatch = useAppDispatch()
    const [token, setToken] = useState<null | string>(null)
    const [isOpen, setIsModalOpen] = useState(false)
    const [forgotPassword, {isLoading}] = useForgotPasswordMutation()

    const {
        formState: {errors, isValid},
        getValues,
        handleSubmit,
        reset,
        setValue,
        ...rest
    } = useForm<FormData>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data: FormData) => {
        forgotPassword(data)
            .unwrap()
            .then(() => {
                setIsModalOpen(true)
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
