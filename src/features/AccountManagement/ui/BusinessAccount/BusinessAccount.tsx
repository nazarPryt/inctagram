import {Controller} from 'react-hook-form'

import {Card} from '@/shared/ui/Card/Card'
import {IconButton, RadioInput} from '@nazar-pryt/inctagram-ui-kit'

import {useGetSubscriptionCostsQuery} from '../../api/accountManagement.api'
import {useCreateNewSubscription} from '../../hook/useCreateNewSubscription'
import {PaypalIcon} from '../../icons/paypalIcon'
import {StripeIcon} from '../../icons/stripeIcon'
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
            <Controller
                control={control}
                name={'typeSubscription'}
                render={({field: {onChange, value}}) => (
                    <Card className={'card'}>
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
                <IconButton onClick={handlePaypalPaymentType}>
                    <PaypalIcon />
                </IconButton>
                or
                <IconButton onClick={handleStripePaymentType}>
                    <StripeIcon />
                </IconButton>
            </div>
        </BusinessFormWrapper>
    )
}
