import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {AllPostsType, ParamsType} from './all-posts-api.type'

// https://stackoverflow.com/questions/72530121/rtk-query-infinite-scrolling-retaining-existing-data

const allPostsApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAllPosts: build.query<AllPostsType, {endCursorPostId: null | number; params: ParamsType}>({
            // Refetch when the page arg changes
            forceRefetch({currentArg, previousArg}) {
                return currentArg !== previousArg
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.items.push(...newItems.items)
            },
            providesTags: ['AllPosts'],
            query: ({endCursorPostId, params}) => ({
                method: 'GET',
                params,
                url: `/public-posts/all/${endCursorPostId}`,
            }),
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
        }),
    }),
})

export const {useGetAllPostsQuery} = allPostsApi
