import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {MyPaymentType} from './myPayment.type'

export const myPaymentsAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        myPayments: build.query<MyPaymentType[], void>({
            query: () => ({
                url: `subscriptions/my-payments`,
            }),
        }),
    }),
})
export const {useMyPaymentsQuery} = myPaymentsAPI
