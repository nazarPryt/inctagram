import React from 'react'
import {CurrentSubscriptionWrapper} from './CurrentSubscription.styled'
import {AccountManagementContainer} from 'shared/styles/AccountManagementContainer.styled'

export const CurrentSubscription = () => {
    return (
        <CurrentSubscriptionWrapper>
            <h4>Current Subscription:</h4>
            <AccountManagementContainer>
                <div className='container'>
                    <div className='block'>
                        <span className='name'>Expire at</span>
                        <span className='date'>12.12.2022</span>
                    </div>
                    <div className='block'>
                        <span className='name'>Next payment</span>
                        <span className='date'>13.02.2023</span>
                    </div>
                </div>
            </AccountManagementContainer>
        </CurrentSubscriptionWrapper>
    )
}
