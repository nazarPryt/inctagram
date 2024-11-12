import {useGetUserPostsQuery, useLazyGetMoreUserPostsQuery} from '@/entities/UserPosts/api/userPosts.api'

export const useGetUserPosts = (userId: number) => {
    const {currentData, data, isLoading} = useGetUserPostsQuery(userId, {
        skip: !userId,
    })
    const [getMorePosts] = useLazyGetMoreUserPostsQuery()
    const posts = data ? data.items ?? [] : []
    const totalCount = currentData ? currentData.totalCount : 0

    const isHavePosts = !!(data && data.items.length)
    const hasMore = totalCount > posts.length

    const fetchMoreData = () => {
        const endCursorPostId = isHavePosts ? data.items[data.items.length - 1].id : null

        if (endCursorPostId && userId) {
            getMorePosts({endCursorPostId, userId})
        }
    }

    return {fetchMoreData, hasMore, isLoading, posts}
}
