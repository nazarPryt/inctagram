import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {api} from '@/redux/api/api'

export const publicProfileApi = api.injectEndpoints({
    endpoints: build => ({
        getPublicProfile: build.query<PublicProfileType, number>({
            providesTags: ['PublicProfile'],
            query: userId => ({
                method: 'GET',
                url: `public-user/profile/${userId}`,
            }),
        }),
    }),
})

export const {useGetPublicProfileQuery} = publicProfileApi
