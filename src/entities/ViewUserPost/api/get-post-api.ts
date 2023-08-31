import { PostByIdType } from 'entities/ViewUserPost/api/type'
import { api } from 'redux/api/api'

const postApi = api.injectEndpoints({
  endpoints: build => ({
    GetUserPost: build.query<PostByIdType, number>({
      query: postId => ({
        url: `posts/p/${postId}`,
        method: 'GET',
      }),
      providesTags: () => ['Post'],
    }),
  }),
})

export const { useGetUserPostQuery } = postApi
