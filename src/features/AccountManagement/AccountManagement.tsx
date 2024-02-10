import {useState} from 'react'

import {AccountManagementWrapper} from './AccountManagement.styled'
import {useShowCurrentSubscription} from './hook/useShowCurrentSubscription'
import {BusinessAccount} from './ui/BusinessAccount/BusinessAccount'
import {PersonalAccount} from './ui/PersonalAccount/PersonalAccount'

export type AccountTypeOption = 'business' | 'personal'

export const AccountManagement = () => {
    const {renderCurrentSubscription} = useShowCurrentSubscription() //todo ask if its ok? (return render component from hook)
    const [accountType, setAccountType] = useState<AccountTypeOption>('personal')

    return (
        <AccountManagementWrapper>
            {renderCurrentSubscription()}
            <PersonalAccount accountType={accountType} setAccountType={setAccountType} />
            {accountType === 'business' && <BusinessAccount />}
        </AccountManagementWrapper>
    )
}
