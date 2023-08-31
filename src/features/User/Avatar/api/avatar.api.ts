import { api } from 'redux/api/api'
import { UserAvatar } from 'redux/types/profileTypes'

export const avatarAPI = api.injectEndpoints({
  endpoints: build => ({
    uploadAvatar: build.mutation<UserAvatar, File | FormData>({
      query: body => ({
        url: `users/profile/avatar`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    deleteAvatar: build.mutation({
      query: body => ({
        url: `users/profile/avatar`,
        method: 'DELETE',
        body,
      }),
    }),
  }),
})

export const { useUploadAvatarMutation, useDeleteAvatarMutation } = avatarAPI
