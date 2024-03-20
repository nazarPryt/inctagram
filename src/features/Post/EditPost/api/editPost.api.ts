import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {EditPostRequest} from './editPost.types'

export const editPostApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        editUserPost: build.mutation<void, EditPostRequest>({
            invalidatesTags: ['ViewUserPost'],
            query: ({description, postId}) => ({
                body: {description},
                method: 'PUT',
                url: `posts/${postId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useEditUserPostMutation} = editPostApi
