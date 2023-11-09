import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useTranslation} from 'shared/hooks/useTranslation'
import {useLoginMutation} from 'features/Auth/LogIn/api/login.api'
import {emailPattern} from 'features/Auth/Registration/helpers/emailPattern'
import {HandelLoginErrors} from 'features/Auth/LogIn/helpers/HandelLoginErrors'
import cookie from 'react-cookies'
import {accessToken} from 'shared/constants/constants'

const getLoginFormSchema = (emailErrorMessage: string, passwordErrorMessage: string) => {
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
    const {t} = useTranslation()
    const schema = getLoginFormSchema('email is required', '')
    const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL
    type FormData = yup.InferType<typeof schema>

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useAppDispatch()

    const {
        handleSubmit,
        setError,
        formState: {errors, isValid},
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: {email: 'kedalag794@mainmile.com', password: 'qwertQ1!'},
    })
    const onSubmit = async (data: FormData) => {
        login({email: data.email, password: data.password})
            .unwrap()
            .then(async payload => {
                cookie.save(accessToken, payload.accessToken, {path: '/', httpOnly: false})
            })
            .catch(error => {
                HandelLoginErrors(error, dispatch, setError)
            })
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        errors,
        isValid,
        ...rest,
    }
}
