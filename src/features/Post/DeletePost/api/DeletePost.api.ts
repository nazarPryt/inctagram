import {api} from '@/redux/api/api'

export const deleteUserPostApi = api.injectEndpoints({
    endpoints: build => ({
        deletePost: build.mutation<void, number>({
            invalidatesTags: ['Posts'],
            query: postId => ({
                method: 'DELETE',
                url: `posts/${postId}`,
            }),
        }),
    }),
    overrideExisting: true,
})
export const {useDeletePostMutation} = deleteUserPostApi
