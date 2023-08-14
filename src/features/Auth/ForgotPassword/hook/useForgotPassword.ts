import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useState} from 'react'
import {useForgotPasswordMutation} from 'features/Auth/ForgotPassword/api/forgotPassword.api'

const schema = yup.object({
    email: yup.string().trim().email('not email').required('emailErrorMessage'),
    recaptcha: yup.string().nonNullable().trim().required('Token is required'),
})

type FormData = yup.InferType<typeof schema>

export const useForgotPassword = () => {
    const [token, setToken] = useState<string | null>(null)
    const [forgotPassword, {isLoading}] = useForgotPasswordMutation()

    const {
        handleSubmit,
        setValue,
        formState: {errors, isValid},
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
        reValidateMode: 'onChange',
    })
    const onSubmit = async (data: FormData) => {
        forgotPassword(data)
    }
    const handleChangeCaptcha = (value: string | null) => {
        setToken(value)
        setValue('recaptcha', value!)
    }

    return {
        handleChangeCaptcha,
        token,
        isLoading,
        isValid,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        ...rest,
    }
}
