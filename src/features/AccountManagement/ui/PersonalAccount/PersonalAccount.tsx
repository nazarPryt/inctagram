import {ChangeEvent, Dispatch, SetStateAction} from 'react'

import {PersonalAccountStyled} from '@/features/AccountManagement/ui/PersonalAccount/PersonalAccount.styled'
import {Card} from '@/shared/ui/Card/Card'
import {RadioInput} from '@nazar-pryt/inctagram-ui-kit'

import {AccountTypeOption} from '../../AccountManagement'

type PropsType = {
    accountType: AccountTypeOption
    setAccountType: Dispatch<SetStateAction<AccountTypeOption>>
}
export const PersonalAccount = ({accountType, setAccountType}: PropsType) => {
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAccountType(event.target.value as AccountTypeOption)
    }

    return (
        <PersonalAccountStyled>
            <h4> Account type:</h4>
            <Card className={'card'}>
                <RadioInput
                    checked={accountType === 'personal'}
                    label={'Personal'}
                    onChange={handleRadioChange}
                    value={'personal'}
                />
                <RadioInput
                    checked={accountType === 'business'}
                    label={'Business'}
                    onChange={handleRadioChange}
                    value={'business'}
                />
            </Card>
        </PersonalAccountStyled>
    )
}
