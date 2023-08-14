import {ChangeEvent, useState} from 'react'
import {RadioInput} from 'shared/ui/RadioInput/RadioInput'
import {BusinessAccountContainer} from './BusinessAccount.styled'

export enum OptionForCosts {
    ONE_DAY_COST = '10',
    SEVEN_DAY_COST = '50',
    MONTH_COST = '100',
}

export const BusinessAccount = () => {
    const [selectedCostsValue, setSelectedCostsValue] = useState<OptionForCosts>(OptionForCosts.ONE_DAY_COST)

    const handleCostsRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedCostsValue(event.target.value as OptionForCosts)
    }

    return (
        <>
            <h4>Your subscription costs:</h4>
            <BusinessAccountContainer>
                <RadioInput
                    label={'$10 per 1 Day'}
                    value={OptionForCosts.ONE_DAY_COST}
                    checked={selectedCostsValue === OptionForCosts.ONE_DAY_COST}
                    onChange={handleCostsRadioChange}
                />
                <RadioInput
                    label={'$50 per 7 Day'}
                    value={OptionForCosts.SEVEN_DAY_COST}
                    checked={selectedCostsValue === OptionForCosts.SEVEN_DAY_COST}
                    onChange={handleCostsRadioChange}
                />
                <RadioInput
                    label={'$100 per month'}
                    value={OptionForCosts.MONTH_COST}
                    checked={selectedCostsValue === OptionForCosts.MONTH_COST}
                    onChange={handleCostsRadioChange}
                />
            </BusinessAccountContainer>
        </>
    )
}
