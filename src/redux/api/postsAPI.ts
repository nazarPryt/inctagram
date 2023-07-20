import {api} from './api'
import {CreatePostResponse, UploadedImageResponse, UploadPost} from '../types/postsTypes'

export const postsAPI = api.injectEndpoints({
    endpoints: build => ({
        uploadImage: build.mutation<UploadedImageResponse, FormData | File>({
            query: body => ({
                url: `posts/image`,
                method: 'POST',
                body,
            }),
        }),
        createPost: build.mutation<CreatePostResponse, UploadPost>({
            query: body => ({
                url: `posts`,
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {useUploadImageMutation, useCreatePostMutation} = postsAPI
