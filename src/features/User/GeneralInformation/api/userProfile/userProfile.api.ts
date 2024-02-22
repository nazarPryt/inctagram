import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {UserProfileType} from './userProfile.types'

export const userProfileApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getUserProfile: build.query<UserProfileType, void>({
            providesTags: ['User'],
            query: () => ({
                method: 'GET',
                url: `users/profile`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetUserProfileQuery} = userProfileApi
