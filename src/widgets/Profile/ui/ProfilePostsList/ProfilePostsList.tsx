import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {Loader} from 'shared/ui/Loader/Loader'
import {UserPost} from 'entities/UserPosts/ui/UserPost'
import {NoPosts} from 'entities/UserPosts/ui/NoPosts/NoPosts'
import {useGetUserPostsQuery} from 'entities/UserPosts/api/user-posts-api'
import {useAppSelector} from '../../../../shared/hooks/reduxHooks'

export const ProfilePostsList = () => {
    const userId = useAppSelector(state => state.userAuth.userId) as number
    const endCursorPostId = null

    const {data: posts, isLoading} = useGetUserPostsQuery({userId, endCursorPostId})

    const isNoPosts = posts && posts.items.length === 0

    if (isLoading) {
        return <Loader />
    }
    if (isNoPosts) {
        return <NoPosts />
    }

    return (
        <ProfilePostsListWrapper>
            {posts &&
                posts.items.map(post => {
                    const images = [...post.images]
                        .filter(img => img.width === 1440)
                        .sort((a, b) => b.uploadId.localeCompare(a.uploadId))

                    return (
                        <UserPost
                            key={post.id}
                            imagesLength={post.images.length}
                            src={images[0]?.url}
                            postId={post.id}
                        />
                    )
                })}
        </ProfilePostsListWrapper>
    )
}
