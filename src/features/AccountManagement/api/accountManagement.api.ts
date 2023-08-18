import {api} from 'redux/api/api'
import {Data, NewSubscriptionType, ResponseCreateSubscriptionType} from '../types/accountTypes'

export const accountManagementAPI = api.injectEndpoints({
    endpoints: build => ({
        createNewSubscription: build.mutation<ResponseCreateSubscriptionType, NewSubscriptionType>({
            query: body => ({
                url: 'subscriptions',
                method: 'POST',
                body,
            }),
        }),
        getSubscriptionCosts: build.query<Data[], void>({
            query: () => ({
                url: `subscriptions/cost-of-subscriptions`,
                method: 'GET',
            }),
        }),
    }),
})

export const {useCreateNewSubscriptionMutation, useGetSubscriptionCostsQuery} = accountManagementAPI
