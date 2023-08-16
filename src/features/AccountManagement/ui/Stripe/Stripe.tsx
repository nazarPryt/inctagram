import React from 'react'
import StripeIcon from 'shared/assets/icons/stripe.svg'
import {StripeWrapper} from './Stripe.styled'

export const Stripe = () => {
    return (
        <StripeWrapper type={'submit'}>
            <StripeIcon />
        </StripeWrapper>
    )
}
