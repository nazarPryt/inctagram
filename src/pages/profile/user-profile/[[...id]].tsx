import {useGetPublicProfileQuery} from '@/entities/PublicProfile/api/public-profile-api'
import {useGetUserPostsQuery} from '@/entities/UserPosts/api/user-posts-api'
import {useMode} from '@/shared/hooks/useMode'
import {getAuthorizedLayout} from '@/shared/layouts/authorized'
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
    const endCursorPostId = null
    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId, {
        refetchOnMountOrArgChange: true,
        skip: !userId,
    })
    const {data: userPosts, isLoading: isLoadingPosts} = useGetUserPostsQuery(
        {endCursorPostId, userId},
        {refetchOnMountOrArgChange: true, skip: !userId}
    )

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