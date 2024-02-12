import {useState} from 'react'

import {useGetAllPostsQuery} from '@/entities/Post/api/all-posts-api'
import {ParamsType} from '@/entities/Post/api/all-posts-api.type'

export const useGetAllPosts = () => {
    const params: ParamsType = {pageSize: 2}
    const [endCursorPostId, setEndCursorPostId] = useState<null | number>(null)

    const {data, isLoading} = useGetAllPostsQuery({endCursorPostId, params}, {refetchOnMountOrArgChange: true})

    const isHavePosts = data && data.items.length

    const fetchMoreData = () => {
        setTimeout(() => {
            const lastPostId = isHavePosts ? data.items[data.items.length - 1].id : null

            setEndCursorPostId(lastPostId)
        }, 1500)
    }

    return {data, fetchMoreData, isHavePosts, isLoading}
}
