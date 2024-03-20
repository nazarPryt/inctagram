import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {PublicProfileTypes} from './publicProfile.types'

export const publicProfileApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getPublicProfile: build.query<PublicProfileTypes, number>({
            query: userId => ({
                method: 'GET',
                url: `public-user/profile/${userId}`,
            }),
        }),
    }),
})

export const {useGetPublicProfileQuery} = publicProfileApi
