import InfiniteScroll from 'react-infinite-scroll-component'

import {Post} from '@/entities/Post/Post'
import {useGetAllPosts} from '@/entities/Post/hook/useGetAllPosts'
import {ScrollToTop} from '@/features/ScrollToTop'
import {EndMessageScrolling} from '@/shared/ui/EndMessageScrolling'
import {NoPosts} from '@/shared/ui/NoPosts'
import {AnimatePresence} from 'framer-motion'

import {AllPostsListStyled} from './AllPostsList.styled'
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
        <AllPostsListStyled>
            <AnimatePresence>
                <div className={'infiniteScrollWrapper'}>
                    <InfiniteScroll
                        dataLength={posts.length}
                        endMessage={<EndMessageScrolling text={'Yay! You have seen it all'} />}
                        hasMore={hasMore}
                        loader={<HomePostSkeleton />}
                        next={fetchMoreData}
                    >
                        {posts.map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </InfiniteScroll>
                </div>
            </AnimatePresence>
            <ScrollToTop />
        </AllPostsListStyled>
    )
}
