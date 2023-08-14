import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useCreateNewPasswordMutation} from 'features/Auth/CreateNewPassword/api/createNewPassword.api'

const schema = yup.object({
    password: yup
        .string()
        .trim()
        .min(6, 'Your password is too short, min 6 characters')
        .max(20, 'Your password is too long, max 20 characters')
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .trim()
        .required('You have to confirm your Password')
        .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})

type FormData = yup.InferType<typeof schema>

export const useCreateNewPassword = (recoveryCode: string) => {
    const [askNewPassword] = useCreateNewPasswordMutation()
    const {
        handleSubmit,
        formState: {errors, isValid},
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
        reValidateMode: 'onChange',
    })
    const onSubmit = async (data: FormData) => {
        const toSend: NewPassType = {
            newPassword: data.password,
            recoveryCode,
        }
        askNewPassword({...toSend})
    }

    return {
        isValid,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        ...rest,
    }
}

type NewPassType = {
    newPassword: string
    recoveryCode: string
}
