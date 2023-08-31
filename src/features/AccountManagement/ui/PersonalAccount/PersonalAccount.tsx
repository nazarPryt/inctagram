import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { AccountManagementContainer } from 'shared/styles/AccountManagementContainer.styled'
import { RadioInput } from 'shared/ui/RadioInput/RadioInput'

export type Option = 'business' | 'personal'
type PropsType = {
  selectedValue: Option
  setSelectedValue: Dispatch<SetStateAction<Option>>
}
export const PersonalAccount = ({ selectedValue, setSelectedValue }: PropsType): JSX.Element => {
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedValue(event.target.value as Option)
  }

  return (
    <>
      <h4> Account type:</h4>
      <AccountManagementContainer>
        <RadioInput
          checked={selectedValue === 'personal'}
          label="Personal"
          value="personal"
          onChange={handleRadioChange}
        />
        <RadioInput
          checked={selectedValue === 'business'}
          label="Business"
          value="business"
          onChange={handleRadioChange}
        />
      </AccountManagementContainer>
    </>
  )
}
