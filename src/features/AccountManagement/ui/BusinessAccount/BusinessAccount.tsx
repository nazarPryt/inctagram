import {ChangeEvent, useState} from 'react'
import {RadioInput} from 'shared/ui/RadioInput/RadioInput'
import {BusinessAccountContainer} from './BusinessAccount.styled'
import {PayPal} from '../PayPal/PayPal'
import {Stripe} from '../Stripe/Stripe'
import {Subscription} from '../../types/accountTypes'
import {useCreateNewSubscription} from '../../hook/useCreateNewSubscription'

export const BusinessAccount = () => {
    const [selectedCostsValue, setSelectedCostsValue] = useState<Subscription>(Subscription.MONTHLY)
    const {handleSubmit, register, errors, isValid} = useCreateNewSubscription()
    const handleCostsRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedCostsValue(event.target.value as Subscription)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Your subscription costs:</h4>
            <BusinessAccountContainer>
                <RadioInput
                    {...register('typeSubscription')}
                    label={'$100 per month'}
                    value={Subscription.MONTHLY}
                    checked={selectedCostsValue === Subscription.MONTHLY}
                    onChange={handleCostsRadioChange}
                />
                <RadioInput
                    {...register('typeSubscription')}
                    label={'$500 per half-year'}
                    value={Subscription.SEMI_ANNUALLY}
                    checked={selectedCostsValue === Subscription.SEMI_ANNUALLY}
                    onChange={handleCostsRadioChange}
                />
                <RadioInput
                    {...register('typeSubscription')}
                    label={'$900 per year'}
                    value={Subscription.YEARLY}
                    checked={selectedCostsValue === Subscription.YEARLY}
                    onChange={handleCostsRadioChange}
                />
            </BusinessAccountContainer>
            <span>
                <PayPal />
                or
                <Stripe />
            </span>
        </form>
    )
}
