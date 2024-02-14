import {useGetPublicProfileQuery} from '@/entities/PublicProfile/api/public-profile-api'
import {useGetUserPostsQuery} from '@/entities/UserPosts/api/user-posts-api'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {Profile} from '@/widgets/Profile/Profile'

export const MyProfile = () => {
    const userId = useAppSelector(state => state.userAuth.userId) as number
    const endCursorPostId = null
    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId)
    const {data: posts, isLoading: isLoadingPosts} = useGetUserPostsQuery({endCursorPostId, userId})

    return (
        <Profile
            isLoadingPosts={isLoadingPosts}
            isLoadingUser={isLoadingUser}
            mode={'myProfile'}
            user={user}
            userPosts={posts}
        />
    )
}
