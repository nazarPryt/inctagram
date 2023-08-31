import { api } from 'redux/api/api'

export const editPostApi = api.injectEndpoints({
  endpoints: build => ({
    editUserPost: build.mutation<void, { postId: number; description: string }>({
      query: ({ postId, description }) => ({
        url: `posts/${postId}`,
        method: 'PUT',
        body: { description },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

export const { useEditUserPostMutation } = editPostApi
