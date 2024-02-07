import {api} from '@/redux/api/api'

import {AllPostsType, ParamsType} from './all-posts-api.type'

const params: ParamsType = {}

const allPostsApi = api.injectEndpoints({
    endpoints: build => ({
        getAllPosts: build.query<AllPostsType, null | number>({
            providesTags: ['AllPosts'],
            query: endCursorPostId => ({
                method: 'GET',
                params,
                url: `/public-posts/all/${endCursorPostId}`,
            }),
        }),
    }),
})

export const {useGetAllPostsQuery} = allPostsApi
