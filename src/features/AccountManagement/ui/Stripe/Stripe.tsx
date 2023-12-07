import StripeIcon from 'shared/assets/icons/stripe.svg'
import {StripeWrapper} from './Stripe.styled'

type PropsType = {
    onClick?: () => void
}
export const Stripe = ({onClick}: PropsType) => {
    return (
        <StripeWrapper onClick={onClick} type={'submit'}>
            <StripeIcon />
        </StripeWrapper>
    )
}
