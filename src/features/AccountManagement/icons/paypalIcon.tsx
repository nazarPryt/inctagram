import {Card} from '@/shared/ui/Card/Card'
import Image from 'next/image'
import styled from 'styled-components'

import paypalIcon from '../../../../public/pictures/PayPalIcon.png'

const PayPalIconStyled = styled(Card)``

export const PaypalIcon = () => {
    return (
        <PayPalIconStyled>
            <Image alt={'paypalIcon'} height={30} src={paypalIcon} width={70} />
        </PayPalIconStyled>
    )
}
