import {api} from '@/redux/api/api'

import {CreatePostResponse, UploadPost, UploadedImageResponse} from './types'

export const createPostAPI = api.injectEndpoints({
    endpoints: build => ({
        CreatePost: build.mutation<CreatePostResponse, UploadPost>({
            invalidatesTags: ['Posts'],
            query: body => ({
                body,
                method: 'POST',
                url: `posts`,
            }),
        }),
        UploadImage: build.mutation<UploadedImageResponse, File | FormData>({
            invalidatesTags: ['Posts'],
            query: body => ({
                body,
                method: 'POST',
                url: `posts/image`,
            }),
        }),
    }),
})

export const {useCreatePostMutation, useUploadImageMutation} = createPostAPI
