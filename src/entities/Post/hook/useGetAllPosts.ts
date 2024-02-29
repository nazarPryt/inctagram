import {useState} from 'react'

import {useGetAllPostsQuery} from '@/entities/Post/api/all-posts-api'
import {ParamsType} from '@/entities/Post/api/all-posts-api.type'

export const useGetAllPosts = () => {
    const params: ParamsType = {pageSize: 2}
    const [endCursorPostId, setEndCursorPostId] = useState<null | number>(null)

    const {currentData, data, isLoading} = useGetAllPostsQuery({endCursorPostId, params})

    if (data && currentData) {
        const isHavePosts = data && data.items.length
        const hasMore = data.totalCount > currentData.items.length

        const fetchMoreData = () => {
            const lastPostId = isHavePosts ? data.items[data.items.length - 1].id : null

            setEndCursorPostId(lastPostId)
        }

        return {data, fetchMoreData, hasMore, isHavePosts, isLoading}
    } else {
        return {data, fetchMoreData: () => {}, hasMore: false, isHavePosts: false, isLoading}
    }
}
