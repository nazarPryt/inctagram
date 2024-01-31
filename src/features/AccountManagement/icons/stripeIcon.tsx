import {Card} from '@/shared/ui/Card/Card'
import Image from 'next/image'

import stripeIcon from '../../../../public/pictures/StripeIcon.png'

export const StripeIcon = () => {
    return (
        <Card>
            <Image alt={'paypalIcon'} height={30} src={stripeIcon} width={70} />
        </Card>
    )
}
