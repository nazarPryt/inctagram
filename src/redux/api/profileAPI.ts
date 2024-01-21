import {api} from 'redux/api/api'
import {UserProfile} from 'redux/types/authTypes'

export const profileAPI = api.injectEndpoints({
    endpoints: build => ({
        getUserProfile: build.query<UserProfile, void>({
            query: () => ({
                url: `users/profile`,
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
    }),
    overrideExisting: true,
})

export const {useGetUserProfileQuery} = profileAPI
