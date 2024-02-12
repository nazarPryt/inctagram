import {useGetPublicProfileQuery} from '@/entities/PublicProfile/api/public-profile-api'
import {useGetUserPostsQuery} from '@/entities/UserPosts/api/user-posts-api'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {Profile} from '@/widgets/Profile/Profile'

export const MyProfile = () => {
    const userId = useAppSelector(state => state.userAuth.userId) as number

    const endCursorPostId = null
    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId)
    const {data: userPosts, isLoading: isLoadingPosts} = useGetUserPostsQuery({endCursorPostId, userId})

    if (userPosts && user) {
        return (
            <Profile isLoadingPosts={isLoadingPosts} isLoadingUser={isLoadingUser} user={user} userPosts={userPosts} />
        )
    }

    return null
}
