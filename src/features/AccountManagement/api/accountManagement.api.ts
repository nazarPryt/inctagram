import {api} from 'redux/api/api'
import {NewSubscriptionType, ResponseCreateSubscriptionType} from '../types/accountTypes'

export const accountManagementAPI = api.injectEndpoints({
    endpoints: build => ({
        createNewSubscription: build.mutation<ResponseCreateSubscriptionType, NewSubscriptionType>({
            query: body => ({
                url: 'subscriptions',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {useCreateNewSubscriptionMutation} = accountManagementAPI
