import {useGetPublicProfileQuery} from '@/entities/PublicProfile/api/public-profile-api'
import {useGetUserPostsQuery} from '@/entities/UserPosts/api/user-posts-api'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {Profile} from '@/widgets/Profile/Profile'

export const MyProfile = () => {
    const userId = useAppSelector(state => state.userAuth.userId) as number
    const isLoggedIn = true
    const endCursorPostId = null
    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId)
    const {data: posts, isLoading: isLoadingPosts} = useGetUserPostsQuery({endCursorPostId, userId})

    if (posts && user) {
        return (
            <Profile
                isLoadingPosts={isLoadingPosts}
                isLoadingUser={isLoadingUser}
                mode={{isLoggedIn}}
                user={user}
                userPosts={posts}
            />
        )
    }

    return null
}
