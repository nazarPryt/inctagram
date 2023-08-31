import React from 'react'

import { StripeWrapper } from './Stripe.styled'

import StripeIcon from 'shared/assets/icons/stripe.svg'

type PropsType = {
  onClick?: () => void
}
export const Stripe = ({ onClick }: PropsType) => {
  return (
    <StripeWrapper type="submit" onClick={onClick}>
      <StripeIcon />
    </StripeWrapper>
  )
}
