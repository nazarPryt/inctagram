import {api} from '@/redux/api/api'

import {AllPostsType, ParamsType} from './all-posts-api.type'

const allPostsApi = api.injectEndpoints({
    endpoints: build => ({
        getAllPosts: build.query<AllPostsType, {endCursorPostId: null | number; params: ParamsType}>({
            providesTags: ['AllPosts'],
            query: ({endCursorPostId, params}) => ({
                method: 'GET',
                params,
                url: `/public-posts/all/${endCursorPostId}`,
            }),
        }),
    }),
})

export const {useGetAllPostsQuery} = allPostsApi
