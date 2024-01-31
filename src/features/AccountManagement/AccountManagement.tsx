import {useState} from 'react'

import {AccountManagementWrapper} from './AccountManagement.styled'
import {useGetCurrentSubscriptionQuery} from './api/accountManagement.api'
import {BusinessAccount} from './ui/BusinessAccount/BusinessAccount'
import {CurrentSubscription} from './ui/CurrentSubscription/CurrentSubscription'
import {PersonalAccount} from './ui/PersonalAccount/PersonalAccount'

export type Option = 'business' | 'personal'

export const AccountManagement = () => {
    const {data: subscriptions, isLoading} = useGetCurrentSubscriptionQuery()
    const [selectedValue, setSelectedValue] = useState<Option>('personal')

    return (
        <AccountManagementWrapper>
            {subscriptions &&
                subscriptions.data.length > 0 &&
                subscriptions.data.map(subscription => (
                    <CurrentSubscription
                        expireAt={subscription.dateOfPayment}
                        key={subscription.subscriptionId}
                        nextPayment={subscription.endDateOfSubscription}
                    />
                ))}
            <PersonalAccount selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            {selectedValue === 'business' && <BusinessAccount />}
        </AccountManagementWrapper>
    )
}
