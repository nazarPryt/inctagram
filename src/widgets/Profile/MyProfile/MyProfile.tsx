import {useGetPublicProfileQuery} from '@/entities/Profile/PublicProfile/api/publicProfile.api'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {Profile} from '@/widgets/Profile'
import {ProfileHeaderSkeleton} from '@/widgets/Profile/ProfileHeader'
import {ProfilePostsListSkeleton} from '@/widgets/Profile/ProfilePostsList'
import {useRouter} from 'next/router'

export const MyProfile = () => {
    const {query} = useRouter()
    let postId = null

    if (query.postId?.length) {
        postId = +query.postId[0]
    }
    const userId = useAppSelector(state => state.userAuth.userId)

    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId, {skip: !userId})

    if (!user) {
        return (
            <>
                <ProfileHeaderSkeleton />
                <ProfilePostsListSkeleton />
            </>
        )
    }

    return <Profile isLoadingUser={isLoadingUser} mode={'myProfile'} postId={postId} user={user} />
}
