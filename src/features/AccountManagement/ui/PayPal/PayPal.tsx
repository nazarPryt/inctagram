import React from 'react'
import PaypalIcon from 'shared/assets/icons/paypal.svg'
import {PayPalWrapper} from './PayPal.styled'

export const PayPal = () => {
    return (
        <PayPalWrapper type={'submit'}>
            <PaypalIcon />
        </PayPalWrapper>
    )
}
