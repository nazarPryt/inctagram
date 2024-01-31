export type NewSubscriptionType = {
    amount: number
    baseUrl: string
    paymentType: PaymentType
    typeSubscription: SubscriptionType
}

export type SubscriptionType = 'DAY' | 'MONTHLY' | 'WEEKLY'

export type PaymentType = 'PAYPAL' | 'STRIPE'

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
