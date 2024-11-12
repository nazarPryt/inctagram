import {useState} from 'react'

import {usePaymentResultModal} from '@/features/User/AccountManagement/hook/usePaymentResultModal'

import {AccountManagementWrapper} from './AccountManagement.styled'
import {useShowCurrentSubscription} from './hook/useShowCurrentSubscription'
import {BusinessAccount} from './ui/BusinessAccount'
import {PersonalAccount} from './ui/PersonalAccount'

export type AccountTypeOption = 'business' | 'personal'

export const AccountManagement = () => {
    const {renderResultPaymentModal} = usePaymentResultModal()
    const {renderCurrentSubscription} = useShowCurrentSubscription()
    const [accountType, setAccountType] = useState<AccountTypeOption>('personal')

    return (
        <>
            <AccountManagementWrapper>
                {renderCurrentSubscription()}
                <PersonalAccount accountType={accountType} setAccountType={setAccountType} />
                {accountType === 'business' && <BusinessAccount />}
            </AccountManagementWrapper>
            {renderResultPaymentModal()}
        </>
    )
}
