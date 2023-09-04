import {BusinessAccount} from './ui/BusinessAccount/BusinessAccount'
import {AccountManagementWrapper} from './AccountManagement.styled'
import {useState} from 'react'
import {PersonalAccount} from './ui/PersonalAccount/PersonalAccount'
import {useGetCurrentSubscriptionQuery} from './api/accountManagement.api'
import {CurrentSubscription} from './ui/CurrentSubscription/CurrentSubscription'

export type Option = 'personal' | 'business'
export const AccountManagement = () => {
    const {data: currentSubscription} = useGetCurrentSubscriptionQuery()
    const [selectedValue, setSelectedValue] = useState<Option>('personal')
    return (
        <AccountManagementWrapper>
            {currentSubscription?.data?.length! > 0 && <CurrentSubscription />}
            <PersonalAccount selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            {selectedValue === 'business' && <BusinessAccount />}
        </AccountManagementWrapper>
    )
}
