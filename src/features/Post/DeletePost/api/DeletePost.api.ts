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
    overrideExisting: true,
})
export const {useDeletePostMutation} = deleteUserPostApi
