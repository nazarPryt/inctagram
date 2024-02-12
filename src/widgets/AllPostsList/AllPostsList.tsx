import InfiniteScroll from 'react-infinite-scroll-component'

import {Post} from '@/entities/Post/Post'
import {useGetAllPosts} from '@/entities/Post/hook/useGetAllPosts'
import {IsEmpty} from '@/features/User/MyPayments/ui/IsEmpty'
import {ScrollToTop} from '@/shared/ui/ScrollToTop/ScrollToTop'

import {AllPostsListWrapper} from './AllPostsList.styled'
import {AllPostsListSkeleton, HomePostSkeleton} from './AllPostsListSkeleton'

export const AllPostsList = () => {
    const {data, fetchMoreData, isHavePosts, isLoading} = useGetAllPosts()

    if (isLoading) {
        return <AllPostsListSkeleton />
    }

    if (isHavePosts) {
        return (
            <AllPostsListWrapper>
                <InfiniteScroll
                    dataLength={data!.items.length}
                    endMessage={<IsEmpty />}
                    hasMore
                    loader={<HomePostSkeleton />}
                    next={fetchMoreData}
                >
                    {data!.items.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </InfiniteScroll>
                <ScrollToTop />
            </AllPostsListWrapper>
        )
    }

    return null
}
