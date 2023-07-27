import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {signIn} from 'next-auth/react'
import {PATH} from '../../../shared/constants/PATH'
import {SetAppNotificationAC} from '../../../_app/store/appSlice'
import {useAppDispatch} from '../../../shared/hooks/reduxHooks'
import {useLoginMutation} from '../../../redux/api/authAPI'

const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
})

type FormData = yup.InferType<typeof schema>

export const useLoginForm = () => {
    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useAppDispatch()

    const {
        handleSubmit,
        formState: {errors},
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
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
