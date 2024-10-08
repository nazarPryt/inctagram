import {getAuthorizedLayout} from '@/_app/Layouts/authorized'
import {useGetPublicProfileQuery} from '@/entities/Profile/PublicProfile/api/publicProfile.api'
import {useGetUserPostsQuery} from '@/entities/UserPosts/api/userPosts.api'
import {useMode} from '@/shared/hooks/useMode'
import {Profile} from '@/widgets/Profile'
import {useRouter} from 'next/router'

export default function UserProfilePage() {
    const {query} = useRouter()
    const userId = Number(query.id)
    let postId = null

    const {mode} = useMode(userId)

    if (query.id?.length) {
        postId = +query.id[1]
    }
    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId, {
        skip: !userId,
    })
    const {data: userPosts, isLoading: isLoadingPosts} = useGetUserPostsQuery(userId, {skip: !userId})

    if (!user) {
        return null
    }

    return (
        <Profile
            isLoadingPosts={isLoadingPosts}
            isLoadingUser={isLoadingUser}
            mode={mode}
            postId={postId}
            user={user}
            userPosts={userPosts}
        />
    )
}
UserProfilePage.getLayout = getAuthorizedLayout
