import PaypalIcon from '@/shared/assets/icons/paypal.svg'

import {PayPalWrapper} from './PayPal.styled'

type PropsType = {
    onClick?: () => void
}

export const PayPal = ({onClick}: PropsType) => {
    return (
        <PayPalWrapper onClick={onClick} type={'submit'}>
            <PaypalIcon />
        </PayPalWrapper>
    )
}
