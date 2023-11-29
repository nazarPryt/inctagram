import {api} from 'redux/api/api'
import {PostByIdType} from 'entities/ViewUserPost/api/type'

const postApi = api.injectEndpoints({
    endpoints: build => ({
        GetUserPost: build.query<PostByIdType, string>({
            query: postId => ({
                url: `posts/p/${postId}`,
                method: 'GET',
            }),
            providesTags: () => ['Post'],
        }),
    }),
})

export const {useGetUserPostQuery} = postApi
