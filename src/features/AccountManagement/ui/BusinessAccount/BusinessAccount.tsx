import { Controller } from 'react-hook-form'

import { useGetSubscriptionCostsQuery } from '../../api/accountManagement.api'
import { useCreateNewSubscription } from '../../hook/useCreateNewSubscription'
import { PayPal } from '../PayPal/PayPal'
import { Stripe } from '../Stripe/Stripe'

import { BusinessFormWrapper } from './BusinessAccount.styled'

import { AccountManagementContainer } from 'shared/styles/AccountManagementContainer.styled'
import { RadioInput } from 'shared/ui/RadioInput/RadioInput'

export const BusinessAccount = (): JSX.Element => {
  const { data: costs } = useGetSubscriptionCostsQuery()
  const { handleSubmit, control, setValue } = useCreateNewSubscription()

  const handleStripePaymentType = (): Promise<void> => {
    setValue('paymentType', 'STRIPE')

    return handleSubmit()
  }
  const handlePaypalPaymentType = (): Promise<void> => {
    setValue('paymentType', 'PAYPAL')

    return handleSubmit()
  }

  return (
    <BusinessFormWrapper onSubmit={handleSubmit}>
      <h4>Your subscription costs:</h4>
      <AccountManagementContainer>
        <Controller
          control={control}
          name="typeSubscription"
          render={({ field: { onChange, value } }) => (
            <>
              <RadioInput checked={value === 'MONTHLY'} label="$10 per month" value="MONTHLY" onChange={onChange} />
              <RadioInput
                checked={value === 'SEMI_ANNUALLY'}
                label="$50 per half-year"
                value="SEMI_ANNUALLY"
                onChange={onChange}
              />
              <RadioInput checked={value === 'YEARLY'} label="$100 per year" value="YEARLY" onChange={onChange} />
            </>
          )}
        />
      </AccountManagementContainer>
      <span>
        <PayPal onClick={handlePaypalPaymentType} />
        or
        <Stripe onClick={handleStripePaymentType} />
      </span>
    </BusinessFormWrapper>
  )
}
