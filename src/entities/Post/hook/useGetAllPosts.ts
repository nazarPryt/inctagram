import {useGetAllPostsQuery, useLazyGetMorePostsQuery} from '@/entities/Post/api/allPosts.api'
import {useAppSelector} from '@/shared/hooks/reduxHooks'

export const useGetAllPosts = () => {
    const allPostsParams = useAppSelector(store => store.params.allPosts)
    const [getMorePosts] = useLazyGetMorePostsQuery()

    const {currentData, data, isLoading} = useGetAllPostsQuery(allPostsParams)
    const posts = data ? data.items ?? [] : []
    const totalCount = currentData ? currentData.totalCount : 0
    const isHavePosts = data && data.items.length
    const hasMore = totalCount > posts.length

    const fetchMoreData = () => {
        const lastPostId = isHavePosts ? data.items[data.items.length - 1].id : null

        getMorePosts({...allPostsParams, endCursorPostId: lastPostId})
    }

    return {fetchMoreData, hasMore, isHavePosts, isLoading, posts}
}
