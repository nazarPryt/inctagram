import {rtkQuery} from '@/_app/Api/client/RTKQuery'

export const deleteUserPostApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        deletePost: build.mutation<void, number>({
            invalidatesTags: ['UserPosts', 'AllPosts'],
            query: postId => ({
                method: 'DELETE',
                url: `posts/${postId}`,
            }),
        }),
    }),
    overrideExisting: true,
})
export const {useDeletePostMutation} = deleteUserPostApi
