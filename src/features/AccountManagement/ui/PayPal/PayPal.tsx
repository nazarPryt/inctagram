import { PayPalWrapper } from './PayPal.styled'

import PaypalIcon from 'shared/assets/icons/paypal.svg'

type PropsType = {
  onClick?: () => void
}

export const PayPal = ({ onClick }: PropsType): JSX.Element => {
  return (
    <PayPalWrapper type="submit" onClick={onClick}>
      <PaypalIcon />
    </PayPalWrapper>
  )
}
