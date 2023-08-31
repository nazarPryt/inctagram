export type NewSubscriptionType = {
  typeSubscription: SubscriptionType
  paymentType: PaymentType
  amount: number
  baseUrl: string
}

export type SubscriptionType = 'MONTHLY' | 'SEMI_ANNUALLY' | 'YEARLY'

export type PaymentType = 'PAYPAL' | 'STRIPE'

export type ResponseCreateSubscriptionType = {
  url: string
}

export type Data = {
  amount: number
  typeDescription: SubscriptionType
}
export type CurrentSubscriptionData = {
  userId: number
  subscriptionId: string
  dateOfPayment: string
  endDateOfSubscription: string
  autoRenewal: boolean
}

export type CurrentSubscriptionResponseType = {
  data: CurrentSubscriptionData[]
  hasAutoRenewal: boolean
}
