import {api} from 'redux/api/api'

const postApi = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query({
            query: () => ({
                method: 'GET',
                url: `posts`,
            }),
        }),
    }),
})

export const {useGetPostsQuery} = postApi

//todo ~~ Waiting for backend to implement this endpoint
