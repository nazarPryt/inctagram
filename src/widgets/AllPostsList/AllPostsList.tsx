import InfiniteScroll from 'react-infinite-scroll-component'

import {Post} from '@/entities/Post/Post'
import {useGetAllPosts} from '@/entities/Post/hook/useGetAllPosts'
import {ScrollToTop} from '@/features/ScrollToTop'
import {NoPosts} from '@/shared/ui/NoPosts'
import {AnimatePresence} from 'framer-motion'

import {AllPostsListWrapper} from './AllPostsList.styled'
import {AllPostsListSkeleton, HomePostSkeleton} from './ui/AllPostsListSkeleton'

export const AllPostsList = () => {
    const {fetchMoreData, hasMore, isHavePosts, isLoading, posts} = useGetAllPosts()

    if (isLoading) {
        return <AllPostsListSkeleton />
    }

    if (!isHavePosts) {
        return <NoPosts />
    }

    return (
        <AllPostsListWrapper>
            <AnimatePresence>
                <InfiniteScroll
                    dataLength={posts.length}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    hasMore={hasMore}
                    loader={<HomePostSkeleton />}
                    next={fetchMoreData}
                >
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </InfiniteScroll>
            </AnimatePresence>
            <ScrollToTop />
        </AllPostsListWrapper>
    )
}
