import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {AllPostsParamsType} from '@/_app/Store/slicesTypes/paramsSliceType'
import {RootState} from '@/_app/Store/store'
import {AllPostsSchema, AllPostsType} from '@/entities/Post/helpers/AllPosts.schema'

// https://stackoverflow.com/questions/72530121/rtk-query-infinite-scrolling-retaining-existing-data

export const allPostsApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAllPosts: build.query<AllPostsType, AllPostsParamsType>({
            providesTags: ['AllPosts'],
            query: ({endCursorPostId, pageSize}) => ({
                method: 'GET',
                params: {pageSize},
                url: `/public-posts/all/${endCursorPostId}`,
            }),
            transformResponse: response => {
                console.log('response', response)

                return AllPostsSchema.parse(response)
            },
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
            transformResponse: response => {
                return AllPostsSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetAllPostsQuery, useLazyGetMorePostsQuery} = allPostsApi
//https://github.com/ershisan99/flashcards-example-project/blob/master/src/services/decks/decks.service.ts
