import {api} from '@/redux/api/api'

export const editPostApi = api.injectEndpoints({
    endpoints: build => ({
        editUserPost: build.mutation<void, {description: string; postId: number}>({
            invalidatesTags: ['Post'],
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
