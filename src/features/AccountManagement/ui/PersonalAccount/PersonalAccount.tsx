import {ChangeEvent, Dispatch, SetStateAction} from 'react'

import {PersonalAccountStyled} from '@/features/AccountManagement/ui/PersonalAccount/PersonalAccount.styled'
import {Card} from '@/shared/ui/Card/Card'
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
        <PersonalAccountStyled>
            <h4> Account type:</h4>
            <Card className={'card'}>
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
            </Card>
        </PersonalAccountStyled>
    )
}
