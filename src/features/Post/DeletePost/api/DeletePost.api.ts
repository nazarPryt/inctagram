import {api} from 'redux/api/api'

export const deleteUserPostApi = api.injectEndpoints({
    endpoints: build => ({
        deletePost: build.mutation<void, number>({
            query: postId => ({
                url: `posts/${postId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Posts'],
        }),
    }),
})
export const {useDeletePostMutation} = deleteUserPostApi
