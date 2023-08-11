import {api} from 'redux/api/api'
import {PostsType} from 'entities/UserPosts/api/types'

export const userPostApi = api.injectEndpoints({
    endpoints: build => ({
        getUserPosts: build.query<PostsType, number>({
            query: userId => ({
                url: `posts/${userId}`,
                method: 'GET',
            }),
            providesTags: () => ['Posts'],
        }),
        updateUserPost: build.mutation<void, {postId: number; description: string}>({
            query: ({postId, description}) => ({
                url: `posts/${postId}`,
                method: 'PUT',
                body: {description},
            }),
            invalidatesTags: ['Post'],
        }),
    }),
})

export const {useGetUserPostsQuery, useUpdateUserPostMutation} = userPostApi
