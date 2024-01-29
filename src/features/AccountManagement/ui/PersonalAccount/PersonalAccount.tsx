import {ChangeEvent, Dispatch, SetStateAction} from 'react'

import {AccountManagementContainer} from '@/shared/styles/AccountManagementContainer.styled'
import {RadioInput} from '@nazar-pryt/inctagram-ui-kit'

import {Option} from '../../AccountManagement'

type PropsType = {
    selectedValue: Option
    setSelectedValue: Dispatch<SetStateAction<Option>>
}
export const PersonalAccount = ({selectedValue, setSelectedValue}: PropsType) => {
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value as Option)
    }

    return (
        <>
            <h4> Account type:</h4>
            <AccountManagementContainer>
                <RadioInput
                    checked={selectedValue === 'personal'}
                    label={'Personal'}
                    onChange={handleRadioChange}
                    value={'personal'}
                />
                <RadioInput
                    checked={selectedValue === 'business'}
                    label={'Business'}
                    onChange={handleRadioChange}
                    value={'business'}
                />
            </AccountManagementContainer>
        </>
    )
}
