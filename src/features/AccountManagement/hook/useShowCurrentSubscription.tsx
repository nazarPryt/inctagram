import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {useGetCurrentSubscriptionQuery} from '../api/accountManagement.api'
import {CurrentSubscription} from '../ui/CurrentSubscription'

export const useShowCurrentSubscription = () => {
    const {data: subscriptions, isLoading} = useGetCurrentSubscriptionQuery()

    const hasSubscription = subscriptions && !!subscriptions.data.length

    const renderCurrentSubscription = () => {
        const subscription = subscriptions?.data[0]

        if (isLoading) {
            return <Skeleton containerClassName={'skeleton'} height={100} />
        }
        if (hasSubscription && subscription) {
            return (
                <CurrentSubscription
                    key={subscription.subscriptionId}
                    nextPayment={subscription.endDateOfSubscription}
                    startAt={subscription.dateOfPayment}
                />
            )
        }
    }

    return {
        renderCurrentSubscription,
    }
}
