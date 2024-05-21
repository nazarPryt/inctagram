import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {UserPostParamsType} from '@/_app/Store/slicesTypes/paramsSliceType'

import {PostsType} from './userPosts.types'

export const userPostApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getUserPosts: build.query<PostsType, UserPostParamsType>({
            providesTags: ['UserPosts'],
            query: ({endCursorPostId, userId}) => ({
                method: 'GET',
                url: `public-posts/user/${userId}/${endCursorPostId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetUserPostsQuery} = userPostApi
