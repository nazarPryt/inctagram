import {Card} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

import stripeIcon from '../../../../../public/pictures/StripeIcon.png' // todo make alias for public

export const StripeIcon = () => {
    return (
        <Card>
            <Image alt={'paypalIcon'} height={30} src={stripeIcon} width={70} />
        </Card>
    )
}
