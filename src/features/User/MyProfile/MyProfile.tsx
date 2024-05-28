import {useGetPublicProfileQuery} from '@/entities/Profile/PublicProfile/api/publicProfile.api'
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

    const {data: user, isLoading: isLoadingUser} = useGetPublicProfileQuery(userId, {skip: !userId})

    return <Profile isLoadingUser={isLoadingUser} mode={'myProfile'} postId={postId} user={user} />
}
