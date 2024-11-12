import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {GetUserPostsParamsType} from '@/_app/Store/slicesTypes/paramsSliceType'
import {UserPostsSchema, UserPostsType} from '@/entities/UserPosts/helpers/UserPosts.schema'

export const userPostApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getMoreUserPosts: build.query<UserPostsType, GetUserPostsParamsType>({
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const response = await queryFulfilled

                    if (response.data.items.length > 0 && arg.userId) {
                        dispatch(
                            userPostApi.util.updateQueryData('getUserPosts', arg.userId, draft => {
                                Object.assign(draft.items, [...draft.items, ...response.data.items])
                            })
                        )
                    }
                } catch (err) {
                    console.log(err)
                }
            },
            query: ({endCursorPostId, userId}) => ({
                method: 'GET',
                url: `public-posts/user/${userId}/${endCursorPostId}`,
            }),
            transformResponse(response) {
                return UserPostsSchema.parse(response)
            },
        }),
        getUserPosts: build.query<UserPostsType, number>({
            providesTags: ['UserPosts'],
            query: userId => ({
                method: 'GET',
                url: `public-posts/user/${userId}`,
            }),
            transformResponse(response) {
                console.log('response: ', response)

                return UserPostsSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetUserPostsQuery, useLazyGetMoreUserPostsQuery} = userPostApi
