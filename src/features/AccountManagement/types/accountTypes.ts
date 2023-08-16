export interface NewSubscriptionType {
    typeSubscription: Subscription
    paymentType: Payment
    amount: number
}

export enum Subscription {
    MONTHLY = 'MONTHLY',
    SEMI_ANNUALLY = 'SEMI_ANNUALLY',
    YEARLY = 'YEARLY',
}

export enum Payment {
    STRIPE = 'STRIPE',
    PAYPAL = 'PAYPAL',
}

export type ResponseCreateSubscriptionType = {
    url: string
}
