export type NewSubscriptionType = {
    typeSubscription: SubscriptionType
    paymentType: PaymentType
    amount: number
    baseUrl: string
}

export type SubscriptionType = 'MONTHLY' | 'SEMI_ANNUALLY' | 'YEARLY'

export type PaymentType = 'STRIPE' | 'PAYPAL'

export type ResponseCreateSubscriptionType = {
    url: string
}

export type Data = {
    amount: number
    typeDescription: SubscriptionType
}
