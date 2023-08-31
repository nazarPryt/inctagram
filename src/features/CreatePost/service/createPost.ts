import { api } from '../../../redux/api/api'

import { CreatePostResponse, UploadedImageResponse, UploadPost } from './types'

export const createPostAPI = api.injectEndpoints({
  endpoints: build => ({
    UploadImage: build.mutation<UploadedImageResponse, File | FormData>({
      query: body => ({
        url: `posts/image`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    CreatePost: build.mutation<CreatePostResponse, UploadPost>({
      query: body => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const { useUploadImageMutation, useCreatePostMutation } = createPostAPI
