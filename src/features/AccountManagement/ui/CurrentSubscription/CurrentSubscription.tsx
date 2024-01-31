import {Card} from '@/shared/ui/Card/Card'

import {CurrentSubscriptionWrapper} from './CurrentSubscription.styled'

type CurrentSubscriptionType = {
    expireAt: string
    nextPayment: string
}
export const CurrentSubscription = ({expireAt, nextPayment}: CurrentSubscriptionType) => {
    return (
        <CurrentSubscriptionWrapper>
            <h4>Current Subscription:</h4>
            <Card className={'card'}>
                <div className={'block'}>
                    <span className={'name'}>Expire at</span>
                    <span className={'date'}>{new Date(expireAt).toLocaleDateString('ru-RU')}</span>
                </div>
                <div className={'block'}>
                    <span className={'name'}>Next payment</span>
                    <span className={'date'}>{new Date(nextPayment).toLocaleDateString('ru-RU')}</span>
                </div>
            </Card>
        </CurrentSubscriptionWrapper>
    )
}
