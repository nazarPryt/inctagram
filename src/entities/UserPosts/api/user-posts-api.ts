import {api} from 'redux/api/api'
import {PostsType} from 'entities/UserPosts/api/types'

export const userPostApi = api.injectEndpoints({
    endpoints: build => ({
        getUserPosts: build.query<PostsType, number>({
            query: userId => ({
                url: `posts/${userId}`,
                method: 'GET',
            }),
        }),
    }),
})

export const {useGetUserPostsQuery} = userPostApi
