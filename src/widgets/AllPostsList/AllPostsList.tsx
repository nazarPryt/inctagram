import {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import {Post} from '@/entities/Post/Post'
import {useGetAllPostsQuery} from '@/entities/Post/api/all-posts-api'
import {ParamsType} from '@/entities/Post/api/all-posts-api.type'
import {IsEmpty} from '@/features/User/MyPayments/ui/IsEmpty'

import {AllPostsListWrapper} from './AllPostsList.styled'
import {AllPostsListSkeleton, HomePostSkeleton} from './AllPostsListSkeleton'

export const AllPostsList = () => {
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

    if (isLoading) {
        return <AllPostsListSkeleton />
    }

    if (isHavePosts) {
        return (
            <AllPostsListWrapper id={'scrollableDiv'}>
                <InfiniteScroll
                    dataLength={data.items.length}
                    endMessage={<IsEmpty />}
                    hasMore
                    loader={<HomePostSkeleton />}
                    next={fetchMoreData}
                    scrollableTarget={'scrollableDiv'}
                >
                    {data.items.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </InfiniteScroll>
            </AllPostsListWrapper>
        )
    }

    return null
}
