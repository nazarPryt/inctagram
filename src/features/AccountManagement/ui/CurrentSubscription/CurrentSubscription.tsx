import {Card} from '@/shared/ui/Card/Card'

import {CurrentSubscriptionWrapper} from './CurrentSubscription.styled'

type CurrentSubscriptionType = {
    nextPayment: string
    startAt: string
}
export const CurrentSubscription = ({nextPayment, startAt}: CurrentSubscriptionType) => {
    return (
        <CurrentSubscriptionWrapper>
            <h4>Current Subscription:</h4>
            <Card className={'card'}>
                <div className={'block'}>
                    <span className={'name'}>Start at</span>
                    <span className={'date'}>{new Date(startAt).toLocaleDateString('ru-RU')}</span>
                </div>
                <div className={'block'}>
                    <span className={'name'}>Next payment</span>
                    <span className={'date'}>{new Date(nextPayment).toLocaleDateString('ru-RU')}</span>
                </div>
            </Card>
        </CurrentSubscriptionWrapper>
    )
}
