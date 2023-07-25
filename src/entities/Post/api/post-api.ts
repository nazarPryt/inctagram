import {api} from 'redux/api/api'

export const postApi = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query({
            query: () => ({
                url: `posts`,
                method: 'GET',
            }),
        }),
    }),
})

export const {useGetPostsQuery} = postApi

//todo ~~ Waiting for backend to implement this endpoint
