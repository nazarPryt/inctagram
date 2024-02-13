import {useGetPublicProfileQuery} from '@/entities/PublicProfile/api/public-profile-api'
import {useGetUserPostsQuery} from '@/entities/UserPosts/api/user-posts-api'
import {getAuthorizedLayout} from '@/shared/layouts/authorized'
import {Profile} from '@/widgets/Profile/Profile'
import {useRouter} from 'next/router'

export default function UserProfilePage() {
    const router = useRouter()

    const userId = Number(router.query.profileId)

    const isLoggedIn = true
    const endCursorPostId = null
    const {data: user} = useGetPublicProfileQuery(userId)
    const {data: userPosts, isLoading} = useGetUserPostsQuery({endCursorPostId, userId})

    if (userPosts && user) {
        return <Profile mode={{isLoggedIn}} user={user} userPosts={userPosts} />
    }

    return null
}
UserProfilePage.getLayout = getAuthorizedLayout
