import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useLoginMutation} from 'features/Auth/LogIn/api/login.api'
import cookie from 'react-cookies'
import {accessToken} from 'shared/constants/constants'

const getLoginFormSchema = (emailErrorMessage: string, passwordErrorMessage: string) => {
    return yup.object({
        email: yup.string().trim().email('not email').required(emailErrorMessage),
        password: yup.string().trim().required(passwordErrorMessage),
    })
}

export const useLogIn = () => {
    const schema = getLoginFormSchema('not email', 'l;jkfljk')
    type FormData = yup.InferType<typeof schema>

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useAppDispatch()

    const {
        handleSubmit,
        formState: {errors, isValid},
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: {email: 'sevoyo7702@soremap.com', password: '123456'},
    })
    const onSubmit = async (data: FormData) => {
        login({email: data.email, password: data.password})
            .unwrap()
            .then(async payload => {
                cookie.save(accessToken, payload.accessToken, {path: ''})
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
        isValid,
        ...rest,
    }
}
