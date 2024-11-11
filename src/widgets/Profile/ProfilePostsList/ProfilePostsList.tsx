import InfiniteScroll from 'react-infinite-scroll-component'

import {UserPost} from '@/entities/UserPosts/UserPost'
import {UserPostItemType} from '@/entities/UserPosts/helpers/UserPosts.schema'
import {useGetUserPosts} from '@/entities/UserPosts/hooks/useGetUserPosts'
import {NoPosts} from '@/shared/ui/NoPosts'
import {AnimatePresence} from 'framer-motion'

import {ProfilePostsListWrapper} from './ProfilePostsList.styled'
import {ProfilePostsListSkeleton} from './ProfilePostsListSkeleton'

type PropsType = {
    serverSidePosts?: UserPostItemType[]
    userId: number
}

export const ProfilePostsList = ({serverSidePosts, userId}: PropsType) => {
    const {fetchMoreData, hasMore, isLoading, posts} = useGetUserPosts(userId)

    if (isLoading) {
        return <ProfilePostsListSkeleton />
    }

    if (!posts.length && !serverSidePosts?.length) {
        return <NoPosts />
    }
    const renderPosts = () => {
        if (serverSidePosts && serverSidePosts.length) {
            return serverSidePosts.map(post => {
                return <UserPost key={post.id} post={post} />
            })
        }
        if (posts.length) {
            return posts.map(post => {
                return <UserPost key={post.id} post={post} />
            })
        }
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
                    style={{height: '100%', overflowY: 'hidden'}}
                >
                    {renderPosts()}
                </InfiniteScroll>
            </AnimatePresence>
        </ProfilePostsListWrapper>
    )
}
