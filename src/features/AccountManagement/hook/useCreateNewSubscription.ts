import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useCreateNewSubscriptionMutation} from '../api/accountManagement.api'
import {useRouter} from 'next/router'
import {PaymentType, SubscriptionType} from '../types/accountTypes'

const schema = yup.object({
    typeSubscription: yup.string<SubscriptionType>().required(),
    paymentType: yup.string<PaymentType>().required(),
    amount: yup.number().default(1).required(),
    baseUrl: yup.string().default(process.env.NEXT_PUBLIC_DOMAIN_URL).required(),
})

type FormData = yup.InferType<typeof schema>

export const useCreateNewSubscription = () => {
    const router = useRouter()
    const [createNewSubscription] = useCreateNewSubscriptionMutation()
    const {
        handleSubmit,
        setValue,
        control,
        formState: {errors, isValid},
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {typeSubscription: 'MONTHLY'},
        mode: 'onChange',
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
        isValid,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        setValue,
        control,
        ...rest,
    }
}
