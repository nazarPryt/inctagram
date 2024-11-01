import {useForm} from 'react-hook-form'

import {appSettings} from '@/_app/AppSettings'
import {PATH} from '@/_app/AppSettings/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {setAccessToken} from '@/shared/utils/setAccessToken'
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'next/router'

import {useLoginMutation} from '../api/login.api'
import {LoginFormData, createLoginSchema} from '../helpers/logIn.schema'

export const useLogIn = () => {
    const router = useRouter()
    const {t} = useTranslation()
    const [login, {isLoading}] = useLoginMutation()

    const {
        formState: {errors, isValid},
        handleSubmit,
        setError,
        setValue,
        ...rest
    } = useForm<LoginFormData>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(createLoginSchema(t)),
    })
    const onSubmit = async (data: LoginFormData) => {
        login({email: data.email, password: data.password})
            .unwrap()
            .then(async payload => {
                await setAccessToken(payload.accessToken)
                await router.push(PATH.HOME)
            })
            .catch(error => {
                if (error.data?.messages) {
                    setError('password', {
                        message: t.errors.loginIncorrectData,
                        type: 'manual',
                    })
                }
            })
    }
    const handleTestAccount = () => {
        setValue('email', appSettings.constants.testEmail)
        setValue('password', appSettings.constants.testPassword)
    }

    return {
        errors,
        handleSubmit: handleSubmit(onSubmit),
        handleTestAccount,
        isLoading,
        isValid,
        ...rest,
    }
}
