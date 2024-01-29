import {PaypalIcon} from '@nazar-pryt/inctagram-ui-kit'

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
