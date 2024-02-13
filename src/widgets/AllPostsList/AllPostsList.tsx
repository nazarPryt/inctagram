import InfiniteScroll from 'react-infinite-scroll-component'

import {Post} from '@/entities/Post/Post'
import {useGetAllPosts} from '@/entities/Post/hook/useGetAllPosts'
import {NoPosts} from '@/entities/UserPosts/ui/NoPosts/NoPosts'
import {ScrollToTop} from '@/shared/ui/ScrollToTop/ScrollToTop'

import {AllPostsListWrapper} from './AllPostsList.styled'
import {AllPostsListSkeleton, HomePostSkeleton} from './AllPostsListSkeleton'

export const AllPostsList = () => {
    const {data, fetchMoreData, hasMore, isHavePosts, isLoading} = useGetAllPosts()

    if (isLoading) {
        return <AllPostsListSkeleton />
    }

    if (isHavePosts) {
        return (
            <AllPostsListWrapper>
                <InfiniteScroll
                    dataLength={data!.items.length}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    hasMore={hasMore}
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

    return <NoPosts />
}
