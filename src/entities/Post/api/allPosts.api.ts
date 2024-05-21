import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {AllPostsParamsType} from '@/_app/Store/slices/paramsSlice'
import {RootState} from '@/_app/Store/store'
import {ChatParamsTypes} from '@/entities/Messenger/Chat/api/chat.types'

import {AllPostsType} from './allPosts.types'

// https://stackoverflow.com/questions/72530121/rtk-query-infinite-scrolling-retaining-existing-data

const allPostsApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAllPosts: build.query<AllPostsType, AllPostsParamsType>({
            providesTags: ['AllPosts'],
            query: ({endCursorPostId, pageSize}) => ({
                method: 'GET',
                params: {pageSize},
                url: `/public-posts/all/${endCursorPostId}`,
            }),
        }),
        getMorePosts: build.query<AllPostsType, AllPostsParamsType>({
            async onQueryStarted(arg, {dispatch, getState, queryFulfilled}) {
                const store = getState() as RootState
                const getAllPostsParams = store.params.allPosts

                try {
                    const response = await queryFulfilled

                    if (response.data.items.length > 0) {
                        dispatch(
                            allPostsApi.util.updateQueryData('getAllPosts', getAllPostsParams, draft => {
                                Object.assign(draft.items, [...draft.items, ...response.data.items])
                            })
                        )
                    }
                } catch (err) {
                    console.log(err)
                }
            },
            query: ({endCursorPostId, pageSize}) => ({
                method: 'GET',
                params: {pageSize},
                url: `/public-posts/all/${endCursorPostId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetAllPostsQuery, useLazyGetMorePostsQuery} = allPostsApi
//https://github.com/ershisan99/flashcards-example-project/blob/master/src/services/decks/decks.service.ts
