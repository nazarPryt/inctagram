import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {PostByIdType} from './type'

const postApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        GetUserPost: build.query<PostByIdType, null | number>({
            providesTags: ['ViewUserPost'],
            query: postId => ({
                method: 'GET',
                url: `public-posts/${postId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetUserPostQuery} = postApi
