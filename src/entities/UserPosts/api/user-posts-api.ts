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
        updateUserPost: build.mutation<unknown, {description: string; postId: number}>({
            query: ({description, postId}) => ({
                url: `posts/${postId}`,
                method: 'PUT',
                body: description,
            }),
        }),
        deleteUserPost: build.mutation<unknown, number>({
            query: postId => ({
                url: `posts/${postId}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const {useGetUserPostsQuery, useUpdateUserPostMutation, useDeleteUserPostMutation} = userPostApi
