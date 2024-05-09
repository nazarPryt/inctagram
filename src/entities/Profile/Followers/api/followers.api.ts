import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {GetFollowersSchema} from '../helpers/followers.schema'

export const followersApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getFollowers: build.query({
            providesTags: ['AuthProfile'],
            query: userName => ({
                method: 'GET',
                url: `users/${userName}/followers`,
            }),
            transformResponse: response => {
                return GetFollowersSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetFollowersQuery} = followersApi
