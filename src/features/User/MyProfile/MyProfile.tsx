import {useGetPublicProfileQuery} from '@/entities/PublicProfile/api/publicProfile.api'
import {useGetUserPostsQuery} from '@/entities/UserPosts/api/userPosts.api'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {Profile} from '@/widgets/Profile'
import {useRouter} from 'next/router'

export const MyProfile = () => {
    const {query} = useRouter()
    let postId = null

    if (query.postId?.length) {
        postId = +query.postId[0]
    }
    const userId = useAppSelector(state => state.userAuth.userId)
    const endCursorPostId = null
    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId, {skip: !userId})
    const {data: posts, isLoading: isLoadingPosts} = useGetUserPostsQuery({endCursorPostId, userId}, {skip: !userId})

    return (
        <Profile
            isLoadingPosts={isLoadingPosts}
            isLoadingUser={isLoadingUser}
            mode={'myProfile'}
            postId={postId}
            user={user}
            userPosts={posts}
        />
    )
}
