import {useForm} from 'react-hook-form'

import {appSettings} from '@/_app/AppSettings'
import {PATH} from '@/_app/AppSettings/PATH'
import {yupResolver} from '@hookform/resolvers/yup'
import {useRouter} from 'next/router'
import * as yup from 'yup'

import {useCreateNewSubscriptionMutation} from '../api/accountManagement.api'
import {PaymentType, SubscriptionType} from '../api/accountManagement.types'

const urlToRedirect = `${appSettings.DOMAIN_URL}${PATH.PROFILE_SETTINGS}`

const schema = yup.object({
    amount: yup.number().default(10).required(),
    baseUrl: yup.string().default(urlToRedirect).required(),
    paymentType: yup.string<PaymentType>().required(),
    typeSubscription: yup.string<SubscriptionType>().required(),
})

type FormData = yup.InferType<typeof schema>

export const useCreateNewSubscription = () => {
    const router = useRouter()
    const [createNewSubscription, {isLoading: isMakingPayment}] = useCreateNewSubscriptionMutation()
    const {
        control,
        formState: {errors, isValid},
        handleSubmit,
        setValue,
        ...rest
    } = useForm<FormData>({
        defaultValues: {typeSubscription: 'DAY'},
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data: FormData) => {
        createNewSubscription(data)
            .unwrap()
            .then(data => {
                router.replace(data.url)
            })
            .catch(error => {
                console.log(error)
            })
        console.log(data)
    }

    return {
        control,
        errors,
        handleSubmit: handleSubmit(onSubmit),
        isMakingPayment,
        isValid,
        setValue,
        ...rest,
    }
}
