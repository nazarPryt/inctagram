import {z} from 'zod'

export type NewSubscriptionType = {
    amount: number
    baseUrl: string
    paymentType: PaymentType
    typeSubscription: SubscriptionType
}

export const PaymentTypeSchema = z.enum(['PAYPAL', 'STRIPE'])
export type PaymentType = z.infer<typeof PaymentTypeSchema>

export const SubscriptionSchema = z.enum(['DAY', 'MONTHLY', 'WEEKLY'])
export type SubscriptionType = z.infer<typeof SubscriptionSchema>

export type ResponseCreateSubscriptionType = {
    url: string
}

export type SubscriptionDataType = {
    amount: number
    typeDescription: SubscriptionType
}
export type CurrentSubscriptionData = {
    autoRenewal: boolean
    dateOfPayment: string
    endDateOfSubscription: string
    subscriptionId: string
    userId: number
}

export type CurrentSubscriptionResponseType = {
    data: CurrentSubscriptionData[]
    hasAutoRenewal: boolean
}
