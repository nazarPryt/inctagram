import {useGetAllPostsQuery, useLazyGetMorePostsQuery} from '@/entities/Post/api/allPosts.api'
import {useAppSelector} from '@/shared/hooks/reduxHooks'

export const useGetAllPosts = () => {
    const allPostsParams = useAppSelector(store => store.params.allPosts)
    const [getMorePosts] = useLazyGetMorePostsQuery()

    const {currentData, data, isLoading} = useGetAllPostsQuery(allPostsParams)

    if (data && currentData) {
        const isHavePosts = data && data.items.length
        const hasMore = data.totalCount > currentData.items.length

        const fetchMoreData = () => {
            const lastPostId = isHavePosts ? data.items[data.items.length - 1].id : null

            getMorePosts({...allPostsParams, endCursorPostId: lastPostId})
        }

        return {data, fetchMoreData, hasMore, isHavePosts, isLoading}
    } else {
        return {data, fetchMoreData: () => {}, hasMore: false, isHavePosts: false, isLoading}
    }
}
