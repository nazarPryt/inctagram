import InfiniteScroll from 'react-infinite-scroll-component'

import {Post} from '@/entities/Post/Post'
import {UserPost} from '@/entities/UserPosts/UserPost'
import {PostsType} from '@/entities/UserPosts/api/userPosts.types'
import {useGetUserPosts} from '@/entities/UserPosts/hooks/useGetUserPosts'
import {NoPosts} from '@/shared/ui/NoPosts'
import {HomePostSkeleton} from '@/widgets/AllPostsList/ui/AllPostsListSkeleton'
import {AnimatePresence} from 'framer-motion'

import {ProfilePostsListWrapper} from './ProfilePostsList.styled'
import {ProfilePostsListSkeleton} from './ProfilePostsListSkeleton'

type PropsType = {
    isLoadingPosts?: boolean
    posts: Pick<PostsType, 'items'> | undefined
    userId: number
}

export const ProfilePostsList = ({isLoadingPosts, userId}: PropsType) => {
    const {fetchMoreData, hasMore, isLoading, posts} = useGetUserPosts({userId})

    if (isLoading) {
        return <ProfilePostsListSkeleton />
    }

    if (!posts.length) {
        return <NoPosts />
    }

    return (
        <ProfilePostsListWrapper>
            <AnimatePresence>
                <InfiniteScroll
                    className={'scrollWrapper'}
                    dataLength={posts.length}
                    hasMore={hasMore}
                    loader={<ProfilePostsListSkeleton />}
                    next={fetchMoreData}
                >
                    {posts.map(post => {
                        return <UserPost key={post.id} post={post} />
                    })}
                </InfiniteScroll>
            </AnimatePresence>
        </ProfilePostsListWrapper>
    )
}
