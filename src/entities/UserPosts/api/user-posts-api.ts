import {PostsType} from '@/entities/UserPosts/api/types'
import {api} from '@/redux/api/api'

type userPostApiType = {endCursorPostId: null | number; userId: number}

export const userPostApi = api.injectEndpoints({
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
