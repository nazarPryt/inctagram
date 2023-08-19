import {RadioInput} from 'shared/ui/RadioInput/RadioInput'
import {BusinessAccountContainer, BusinessFormWrapper} from './BusinessAccount.styled'
import {PayPal} from '../PayPal/PayPal'
import {Stripe} from '../Stripe/Stripe'
import {useCreateNewSubscription} from '../../hook/useCreateNewSubscription'
import {useGetSubscriptionCostsQuery} from '../../api/accountManagement.api'
import {Controller} from 'react-hook-form'

export const BusinessAccount = () => {
    const {data: costs} = useGetSubscriptionCostsQuery()
    const {handleSubmit, control, setValue} = useCreateNewSubscription()

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
            <BusinessAccountContainer>
                <Controller
                    control={control}
                    name='typeSubscription'
                    render={({field: {onChange, value}}) => (
                        <>
                            <RadioInput
                                label={`$10 per month`}
                                value={'MONTHLY'}
                                onChange={onChange}
                                checked={value === 'MONTHLY'}
                            />
                            <RadioInput
                                onChange={onChange}
                                label={'$50 per half-year'}
                                value={'SEMI_ANNUALLY'}
                                checked={value === 'SEMI_ANNUALLY'}
                            />
                            <RadioInput
                                label={'$100 per year'}
                                onChange={onChange}
                                value={'YEARLY'}
                                checked={value === 'YEARLY'}
                            />
                        </>
                    )}
                />
            </BusinessAccountContainer>
            <span>
                <PayPal onClick={handlePaypalPaymentType} />
                or
                <Stripe onClick={handleStripePaymentType} />
            </span>
        </BusinessFormWrapper>
    )
}
