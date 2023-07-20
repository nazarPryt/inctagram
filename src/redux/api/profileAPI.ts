import {api} from 'redux/api/api'
import {UpdateUserRequest, UserAvatar} from 'redux/types/profileTypes'
import {ResponseType, UserProfile} from 'redux/types/authTypes'

export const profileAPI = api.injectEndpoints({
    endpoints: build => ({
        getUserProfile: build.mutation<UserProfile, string>({
            query: accessToken => ({
                url: `users/profile`,
                method: 'GET',
                headers: {
                    authorization: accessToken,
                },
            }),
        }),
        uploadAvatar: build.mutation<UserAvatar, FormData | File>({
            query: body => ({
                url: `users/profile/avatar`,
                method: 'POST',
                body,
            }),
        }),
        deleteAvatar: build.mutation({
            query: body => ({
                url: `users/profile/avatar`,
                method: 'DELETE',
                body,
            }),
        }),
        updateUser: build.mutation<ResponseType, UpdateUserRequest>({
            query: body => ({
                url: `/users/profile`,
                method: 'PUT',
                body,
            }),
        }),
    }),
})

export const {useUploadAvatarMutation, useDeleteAvatarMutation, useUpdateUserMutation, useGetUserProfileMutation} =
    profileAPI
