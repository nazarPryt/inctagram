import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {PublicProfileType} from './public-profile.type'

export const publicProfileApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getPublicProfile: build.query<PublicProfileType, number>({
            query: userId => ({
                method: 'GET',
                url: `public-user/profile/${userId}`,
            }),
        }),
    }),
})

export const {useGetPublicProfileQuery} = publicProfileApi
