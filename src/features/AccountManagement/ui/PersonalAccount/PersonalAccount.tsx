import {ChangeEvent, Dispatch, SetStateAction} from 'react'
import {RadioInput} from 'shared/ui/RadioInput/RadioInput'
import {Option} from '../../AccountManagement'
import {PersonalAccountContainer} from './PersonalAccount.styled'

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
            <PersonalAccountContainer>
                <RadioInput
                    label={'Personal'}
                    value={'personal'}
                    checked={selectedValue === 'personal'}
                    onChange={handleRadioChange}
                />
                <RadioInput
                    label={'Business'}
                    value={'business'}
                    checked={selectedValue === 'business'}
                    onChange={handleRadioChange}
                />
            </PersonalAccountContainer>
        </>
    )
}
