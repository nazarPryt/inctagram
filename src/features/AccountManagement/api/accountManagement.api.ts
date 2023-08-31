import {
  CurrentSubscriptionResponseType,
  Data,
  NewSubscriptionType,
  ResponseCreateSubscriptionType,
} from '../types/accountTypes'

import { api } from 'redux/api/api'

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
    getCurrentSubscription: build.query<CurrentSubscriptionResponseType, void>({
      query: () => ({
        url: `subscriptions/current-subscriptions`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useCreateNewSubscriptionMutation, useGetSubscriptionCostsQuery, useGetCurrentSubscriptionQuery } =
  accountManagementAPI
