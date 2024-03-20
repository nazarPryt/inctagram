import paypalIcon from '@/public/pictures/PayPalIcon.png'
import {Card} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'
import styled from 'styled-components'

const PayPalIconStyled = styled(Card)``

export const PaypalIcon = () => {
    return (
        <PayPalIconStyled>
            <Image alt={'paypalIcon'} height={30} src={paypalIcon} width={70} />
        </PayPalIconStyled>
    )
}
