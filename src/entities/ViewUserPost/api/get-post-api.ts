import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {PostByIdType} from './type'

const postApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        GetUserPost: build.query<PostByIdType, null | number>({
            query: postId => ({
                method: 'GET',
                url: `public-posts/${postId}`,
            }),
        }),
    }),
})

export const {useGetUserPostQuery} = postApi
