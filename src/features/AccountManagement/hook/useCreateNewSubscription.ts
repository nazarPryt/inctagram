import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useCreateNewSubscriptionMutation} from '../api/accountManagement.api'
import {NewSubscriptionType, Payment, Subscription} from '../types/accountTypes'

const schema = yup.object({
    typeSubscription: yup.string().required(),
})

type FormData = yup.InferType<typeof schema>

export const useCreateNewSubscription = () => {
    const [createNewSubscription] = useCreateNewSubscriptionMutation()
    const {
        handleSubmit,
        formState: {errors, isValid},
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {typeSubscription: Subscription.MONTHLY},
    })
    const onSubmit = async (data: FormData) => {
        const toSend: NewSubscriptionType = {
            typeSubscription: data.typeSubscription as Subscription,
            paymentType: Payment.STRIPE,
            amount: 1,
        }
        createNewSubscription(toSend)
        console.log(toSend)
    }

    return {
        isValid,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        ...rest,
    }
}
