import {PostByIdType} from 'entities/ViewUserPost/api/type'
import {api} from 'redux/api/api'

const postApi = api.injectEndpoints({
    endpoints: build => ({
        GetUserPost: build.query<PostByIdType, null | number>({
            providesTags: () => ['Post'],
            query: postId => ({
                method: 'GET',
                url: `public-posts/${postId}`,
            }),
        }),
    }),
})

export const {useGetUserPostQuery} = postApi
