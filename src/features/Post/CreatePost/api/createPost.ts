import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {CreatePostResponse, UploadPost, UploadedImageResponse} from './createPost.types'

export const createPostAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        CreatePost: build.mutation<CreatePostResponse, UploadPost>({
            invalidatesTags: ['UserPosts', 'AllPosts'],
            query: body => ({
                body,
                method: 'POST',
                url: `posts`,
            }),
        }),
        UploadImage: build.mutation<UploadedImageResponse, File | FormData>({
            query: body => ({
                body,
                method: 'POST',
                url: `posts/image`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useCreatePostMutation, useUploadImageMutation} = createPostAPI
