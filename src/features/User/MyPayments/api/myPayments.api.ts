import {MyPaymentType} from '@/features/User/MyPayments/api/myPayment.type'
import {api} from '@/redux/api/api'

export const myPaymentsAPI = api.injectEndpoints({
    endpoints: build => ({
        myPayments: build.query<MyPaymentType[], void>({
            query: () => ({
                url: `subscriptions/my-payments`,
            }),
        }),
    }),
})
export const {useMyPaymentsQuery} = myPaymentsAPI
