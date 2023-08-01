import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {signIn} from 'next-auth/react'
import {PATH} from 'shared/constants/PATH'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useLoginMutation} from 'redux/api/authAPI'
import {useTranslation} from 'shared/hooks/useTranslation'

const getLoginFormSchema = (emailErrorMessage: string, passwordErrorMessage: string) => {
    return yup.object({
        email: yup.string().email('not email').required(emailErrorMessage),
        password: yup.string().required(passwordErrorMessage),
    })
}

export const useLoginForm = () => {
    const {t} = useTranslation()
    const schema = getLoginFormSchema('not email', 'l;jkfljk')

    type FormData = yup.InferType<typeof schema>

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useAppDispatch()

    const {
        handleSubmit,
        formState: {errors},
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
        defaultValues: {email: 'sevoyo7702@soremap.com', password: '123456'},
    })
    const onSubmit = async (data: FormData) => {
        login({email: data.email, password: data.password})
            .unwrap()
            .then(async payload => {
                await signIn('credentials', {
                    accessToken: payload.accessToken,
                    redirect: true,
                    callbackUrl: PATH.HOME,
                })
            })
            .catch(() =>
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'error', message: 'Something went wrong, Try again please!!'},
                    })
                )
            )
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        errors,
        ...rest,
    }
}
