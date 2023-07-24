import {api} from 'redux/api/api'
import {PostsType} from 'entities/Post/api/types'

export const postApi = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query<PostsType, number>({
            query: userID => ({
                url: `posts/${userID}`,
                method: 'GET',
            }),
        }),
    }),
})

export const {useGetPostsQuery} = postApi
