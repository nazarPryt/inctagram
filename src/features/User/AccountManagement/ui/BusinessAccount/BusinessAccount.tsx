import {Controller} from 'react-hook-form'

import {Card, IconButton, Loader, RadioInput, Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {useGetSubscriptionCostsQuery} from '../../api/accountManagement.api'
import {useCreateNewSubscription} from '../../hook/useCreateNewSubscription'
import {PaypalIcon} from '../../icons/paypalIcon'
import {StripeIcon} from '../../icons/stripeIcon'
import {BusinessFormWrapper} from './BusinessAccount.styled'

export const BusinessAccount = () => {
    const {data: costs, isLoading} = useGetSubscriptionCostsQuery()
    const {control, handleSubmit, isMakingPayment, setValue} = useCreateNewSubscription()

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
            {isMakingPayment && <Loader />}
            <h4>Your subscription costs:</h4>

            <Controller
                control={control}
                name={'typeSubscription'}
                render={({field: {onChange, value}}) => (
                    <Card className={'card'}>
                        {isLoading && <Skeleton containerClassName={'skeleton'} count={3} height={20} />}
                        {costs &&
                            costs.data.map(subscription => (
                                <RadioInput
                                    checked={value === subscription.typeDescription}
                                    key={subscription.amount}
                                    label={`$${subscription.amount} per ${subscription.typeDescription}`}
                                    onChange={onChange}
                                    value={subscription.typeDescription}
                                />
                            ))}
                    </Card>
                )}
            />
            <div className={'paymentButtonsBox'}>
                <IconButton disabled={isMakingPayment} onClick={handlePaypalPaymentType}>
                    <PaypalIcon />
                </IconButton>
                or
                <IconButton disabled={isMakingPayment} onClick={handleStripePaymentType}>
                    <StripeIcon />
                </IconButton>
            </div>
        </BusinessFormWrapper>
    )
}
