import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {
    CurrentSubscriptionResponseType,
    NewSubscriptionType,
    ResponseCreateSubscriptionType,
    SubscriptionDataType,
} from './accountManagement.types'

export const accountManagementAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        createNewSubscription: build.mutation<ResponseCreateSubscriptionType, NewSubscriptionType>({
            query: body => ({
                body,
                method: 'POST',
                url: 'subscriptions',
            }),
        }),
        getCurrentSubscription: build.query<CurrentSubscriptionResponseType, void>({
            query: () => ({
                method: 'GET',
                url: `subscriptions/current-payment-subscriptions`,
            }),
        }),
        getSubscriptionCosts: build.query<{data: SubscriptionDataType[]}, void>({
            query: () => ({
                method: 'GET',
                url: `subscriptions/cost-of-payment-subscriptions`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useCreateNewSubscriptionMutation, useGetCurrentSubscriptionQuery, useGetSubscriptionCostsQuery} =
    accountManagementAPI
