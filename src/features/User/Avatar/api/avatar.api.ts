import {api} from '@/redux/api/api'
import {UserAvatar} from '@/redux/types/profileTypes'

export const avatarAPI = api.injectEndpoints({
    endpoints: build => ({
        deleteAvatar: build.mutation({
            query: body => ({
                body,
                method: 'DELETE',
                url: `users/profile/avatar`,
            }),
        }),

        uploadAvatar: build.mutation<UserAvatar, File | FormData>({
            invalidatesTags: ['User'],
            query: body => ({
                body,
                method: 'POST',
                url: `users/profile/avatar`,
            }),
        }),
    }),
})

export const {useDeleteAvatarMutation, useUploadAvatarMutation} = avatarAPI
