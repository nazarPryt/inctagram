import {useForm} from 'react-hook-form'

import {yupResolver} from '@hookform/resolvers/yup'
import {useRouter} from 'next/router'
import * as yup from 'yup'

import {useCreateNewSubscriptionMutation} from '../api/accountManagement.api'
import {PaymentType, SubscriptionType} from '../types/accountTypes'

const schema = yup.object({
    amount: yup.number().default(1).required(),
    baseUrl: yup.string().default(process.env.NEXT_PUBLIC_DOMAIN_URL).required(),
    paymentType: yup.string<PaymentType>().required(),
    typeSubscription: yup.string<SubscriptionType>().required(),
})

type FormData = yup.InferType<typeof schema>

export const useCreateNewSubscription = () => {
    const router = useRouter()
    const [createNewSubscription] = useCreateNewSubscriptionMutation()
    const {
        control,
        formState: {errors, isValid},
        handleSubmit,
        setValue,
        ...rest
    } = useForm<FormData>({
        defaultValues: {typeSubscription: 'MONTHLY'},
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
        isValid,
        setValue,
        ...rest,
    }
}
