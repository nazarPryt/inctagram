import {BusinessAccount} from './ui/BusinessAccount/BusinessAccount'
import {AccountManagementWrapper} from './AccountManagement.styled'
import {useState} from 'react'
import {PersonalAccount} from './ui/PersonalAccount/PersonalAccount'

export type Option = 'personal' | 'business'
export const AccountManagement = () => {
    const [selectedValue, setSelectedValue] = useState<Option>('personal')
    return (
        <AccountManagementWrapper>
            <PersonalAccount selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            {selectedValue === 'business' && <BusinessAccount />}
        </AccountManagementWrapper>
    )
}
