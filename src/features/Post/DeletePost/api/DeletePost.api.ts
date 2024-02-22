import {rtkQuery} from '@/_app/Api/client/rtkQuery'

export const deleteUserPostApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        deletePost: build.mutation<void, number>({
            invalidatesTags: ['UserPosts'],
            query: postId => ({
                method: 'DELETE',
                url: `posts/${postId}`,
            }),
        }),
    }),
    overrideExisting: true,
})
export const {useDeletePostMutation} = deleteUserPostApi
