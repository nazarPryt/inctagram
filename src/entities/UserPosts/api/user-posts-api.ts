import {api} from 'redux/api/api'
import {PostsType} from 'entities/UserPosts/api/types'

type userPostApiType = {userId: number; endCursorPostId: number | null}

export const userPostApi = api.injectEndpoints({
    endpoints: build => ({
        getUserPosts: build.query<PostsType, userPostApiType>({
            query: ({userId, endCursorPostId}) => ({
                url: `public-posts/user/${userId}/${endCursorPostId}`,
                method: 'GET',
            }),
            providesTags: () => ['Posts'],
        }),
    }),
})

export const {useGetUserPostsQuery} = userPostApi
