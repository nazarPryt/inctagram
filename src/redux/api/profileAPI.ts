import {api} from 'redux/api/api'
import {UserProfile} from 'redux/types/authTypes'

export const profileAPI = api.injectEndpoints({
    endpoints: build => ({
        getUserProfile: build.query<UserProfile, void>({
            providesTags: ['User'],
            query: () => ({
                method: 'GET',
                url: `users/profile`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetUserProfileQuery} = profileAPI
