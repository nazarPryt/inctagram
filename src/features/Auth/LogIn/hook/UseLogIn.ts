import cookie from 'react-cookies'
import {useForm} from 'react-hook-form'

import {useLoginMutation} from '@/features/Auth/LogIn/api/login.api'
import {emailPattern} from '@/features/Auth/Registration/helpers/emailPattern'
import {PATH} from '@/shared/constants/PATH'
import {accessToken} from '@/shared/constants/constants'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '@/shared/store/appSlice'
import {yupResolver} from '@hookform/resolvers/yup'
import {useRouter} from 'next/router'
import * as yup from 'yup'

const getLoginFormSchema = (emailErrorMessage: string) => {
    return yup.object({
        email: yup.string().trim().required(emailErrorMessage).matches(emailPattern, 'email is not valid'),
        password: yup
            .string()
            .trim()
            .required('Password is required')
            .min(6, 'Your password is too short, min 6 characters')
            .max(20, 'Your password is too long, max 20 characters'),
    })
}

export const useLogIn = () => {
    const router = useRouter()
    const schema = getLoginFormSchema('email is required')

    type FormData = yup.InferType<typeof schema>

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useAppDispatch()

    const {
        formState: {errors, isValid},
        handleSubmit,
        setError,
        ...rest
    } = useForm<FormData>({
        defaultValues: {email: 'bemapof779@ricorit.com', password: '11223344qwerTY!'},
        mode: 'onTouched',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data: FormData) => {
        login({email: data.email, password: data.password})
            .unwrap()
            .then(async payload => {
                cookie.save(accessToken, payload.accessToken, {httpOnly: false, path: '/'})
                await router.push(PATH.HOME)
            })
            .catch(() =>
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: 'Cant login', type: 'error'},
                    })
                )
            )
    }

    return {
        errors,
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        isValid,
        ...rest,
    }
}
