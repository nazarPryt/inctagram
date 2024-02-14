import {useGetPublicProfileQuery} from '@/entities/PublicProfile/api/public-profile-api'
import {useGetUserPostsQuery} from '@/entities/UserPosts/api/user-posts-api'
import {useMode} from '@/shared/hooks/useMode'
import {getAuthorizedLayout} from '@/shared/layouts/authorized'
import {Profile} from '@/widgets/Profile/Profile'
import {useRouter} from 'next/router'

export default function UserProfilePage() {
    const router = useRouter()
    const userId = Number(router.query.profileId)
    const {mode} = useMode(userId)

    const endCursorPostId = null
    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId)
    const {data: userPosts, isLoading: isLoadingPosts} = useGetUserPostsQuery({endCursorPostId, userId})

    return (
        <Profile
            isLoadingPosts={isLoadingPosts}
            isLoadingUser={isLoadingUser}
            mode={mode}
            user={user}
            userPosts={userPosts}
        />
    )
}
UserProfilePage.getLayout = getAuthorizedLayout
