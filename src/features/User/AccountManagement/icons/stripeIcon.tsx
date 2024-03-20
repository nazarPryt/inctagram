import stripeIcon from '@/public/pictures/StripeIcon.png'
import {Card} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

export const StripeIcon = () => {
    return (
        <Card>
            <Image alt={'paypalIcon'} height={30} src={stripeIcon} width={70} />
        </Card>
    )
}
