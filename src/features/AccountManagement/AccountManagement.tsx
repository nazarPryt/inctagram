import { useState } from 'react'

import { AccountManagementWrapper } from './AccountManagement.styled'
import { useGetCurrentSubscriptionQuery } from './api/accountManagement.api'
import { BusinessAccount } from './ui/BusinessAccount/BusinessAccount'
import { CurrentSubscription } from './ui/CurrentSubscription/CurrentSubscription'
import { Option, PersonalAccount } from './ui/PersonalAccount/PersonalAccount'

export const AccountManagement = (): JSX.Element => {
  const { data: currentSubscription } = useGetCurrentSubscriptionQuery()
  const [selectedValue, setSelectedValue] = useState<Option>('personal')
  const hasCurrentSubscription = (currentSubscription?.data?.length ?? 0) > 0

  return (
    <AccountManagementWrapper>
      {hasCurrentSubscription && <CurrentSubscription />}
      <PersonalAccount selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      {selectedValue === 'business' && <BusinessAccount />}
    </AccountManagementWrapper>
  )
}
