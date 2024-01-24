import {api} from 'redux/api/api'

import {
    CurrentSubscriptionResponseType,
    Data,
    NewSubscriptionType,
    ResponseCreateSubscriptionType,
} from '../types/accountTypes'

export const accountManagementAPI = api.injectEndpoints({
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
                url: `subscriptions/current-subscriptions`,
            }),
        }),
        getSubscriptionCosts: build.query<Data[], void>({
            query: () => ({
                method: 'GET',
                url: `subscriptions/cost-of-subscriptions`,
            }),
        }),
    }),
})

export const {useCreateNewSubscriptionMutation, useGetCurrentSubscriptionQuery, useGetSubscriptionCostsQuery} =
    accountManagementAPI
