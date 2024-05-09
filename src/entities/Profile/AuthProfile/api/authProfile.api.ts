import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {AuthProfileSchema} from '../helpers/authProfile.schema'

export const authProfileApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAuthProfile: build.query({
            providesTags: ['AuthProfile'],
            query: userName => ({
                method: 'GET',
                url: `users/${userName}`,
            }),
            transformResponse: response => {
                return AuthProfileSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetAuthProfileQuery} = authProfileApi
