'use client'

import {BusinessAccount} from './ui/BusinessAccount/BusinessAccount'
import {AccountManagementWrapper} from './AccountManagement.styled'
import {useState} from 'react'
import {PersonalAccount} from './ui/PersonalAccount/PersonalAccount'
import {PayPal} from './ui/PayPal/PayPal'
import {Stripe} from './ui/Stripe/Stripe'

export type Option = 'personal' | 'business'
export const AccountManagement = () => {
    const [selectedValue, setSelectedValue] = useState<Option>('personal')
    return (
        <AccountManagementWrapper>
            <PersonalAccount selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            {selectedValue === 'business' && <BusinessAccount />}
            <span>
                <PayPal />
                or
                <Stripe />
            </span>
        </AccountManagementWrapper>
    )
}
