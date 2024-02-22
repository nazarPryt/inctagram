import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {PostsType} from './types'

type userPostApiType = {endCursorPostId: null | number; userId: number}

export const userPostApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getUserPosts: build.query<PostsType, userPostApiType>({
            providesTags: ['UserPosts'],
            query: ({endCursorPostId, userId}) => ({
                method: 'GET',
                url: `public-posts/user/${userId}/${endCursorPostId}`,
            }),
        }),
    }),
})

export const {useGetUserPostsQuery} = userPostApi
