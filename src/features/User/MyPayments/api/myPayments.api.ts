import {api} from 'redux/api/api'
import {MyPaymentType} from 'features/User/MyPayments/api/myPayment.type'

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
