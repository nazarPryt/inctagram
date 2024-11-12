import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {PublicProfileSchema} from '../helpers/publicProfile.schema'

export const publicProfileApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getPublicProfile: build.query({
            providesTags: ['PublicProfile'],
            query: userId => ({
                method: 'GET',
                url: `public-user/profile/${userId}`,
            }),
            transformResponse: response => {
                return PublicProfileSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetPublicProfileQuery} = publicProfileApi
