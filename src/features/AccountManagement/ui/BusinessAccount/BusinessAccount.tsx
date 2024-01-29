import {Controller} from 'react-hook-form'

import {AccountManagementContainer} from '@/shared/styles/AccountManagementContainer.styled'
import {RadioInput} from '@nazar-pryt/inctagram-ui-kit'

import {useGetSubscriptionCostsQuery} from '../../api/accountManagement.api'
import {useCreateNewSubscription} from '../../hook/useCreateNewSubscription'
import {PayPal} from '../PayPal/PayPal'
import {Stripe} from '../Stripe/Stripe'
import {BusinessFormWrapper} from './BusinessAccount.styled'

export const BusinessAccount = () => {
    const {data: costs} = useGetSubscriptionCostsQuery()
    const {control, handleSubmit, setValue} = useCreateNewSubscription()

    const handleStripePaymentType = () => {
        setValue('paymentType', 'STRIPE')

        return handleSubmit()
    }
    const handlePaypalPaymentType = () => {
        setValue('paymentType', 'PAYPAL')

        return handleSubmit()
    }

    return (
        <BusinessFormWrapper onSubmit={handleSubmit}>
            <h4>Your subscription costs:</h4>
            <AccountManagementContainer>
                <Controller
                    control={control}
                    name={'typeSubscription'}
                    render={({field: {onChange, value}}) => (
                        <>
                            <RadioInput
                                checked={value === 'MONTHLY'}
                                label={`$10 per month`}
                                onChange={onChange}
                                value={'MONTHLY'}
                            />
                            <RadioInput
                                checked={value === 'SEMI_ANNUALLY'}
                                label={'$50 per half-year'}
                                onChange={onChange}
                                value={'SEMI_ANNUALLY'}
                            />
                            <RadioInput
                                checked={value === 'YEARLY'}
                                label={'$100 per year'}
                                onChange={onChange}
                                value={'YEARLY'}
                            />
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
