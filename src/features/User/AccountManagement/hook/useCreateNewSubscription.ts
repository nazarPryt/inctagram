import {useForm} from 'react-hook-form'

import {appSettings} from '@/_app/AppSettings'
import {PATH} from '@/_app/AppSettings/PATH'
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'next/router'
import {z} from 'zod'

import {useCreateNewSubscriptionMutation} from '../api/accountManagement.api'
import {PaymentTypeSchema, SubscriptionSchema} from '../api/accountManagement.types'

const urlToRedirect = `${appSettings.env.DOMAIN_URL}${PATH.HOME}/${PATH.SETTINGS}/${PATH.ACCOUNT_MANAGEMENT}`

const schema = z.object({
    amount: z.number().min(1).default(10),
    baseUrl: z.string().min(1).default(urlToRedirect),
    paymentType: PaymentTypeSchema,
    typeSubscription: SubscriptionSchema,
})

type FormData = z.infer<typeof schema>

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
        mode: 'all',
        resolver: zodResolver(schema),
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
