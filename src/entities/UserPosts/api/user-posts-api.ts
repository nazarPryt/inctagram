import { PostsType } from 'entities/UserPosts/api/types'
import { api } from 'redux/api/api'

export const userPostApi = api.injectEndpoints({
  endpoints: build => ({
    getUserPosts: build.query<PostsType, number>({
      query: userId => ({
        url: `posts/${userId}`,
        method: 'GET',
      }),
      providesTags: () => ['Posts'],
    }),
  }),
})

export const { useGetUserPostsQuery } = userPostApi
