import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {GetFollowingSchema} from '../helpers/following.schema'

export const followingApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getFollowing: build.query({
            providesTags: ['Following'],
            query: userName => ({
                method: 'GET',
                url: `users/${userName}/following`,
            }),
            transformResponse: response => {
                return GetFollowingSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetFollowingQuery} = followingApi
