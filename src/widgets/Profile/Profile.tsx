import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {PostsType} from '@/entities/UserPosts/api/types'
import {ComponentMode} from '@/shared/hooks/useMode'

import {ProfileWrapper} from './Profile.styled'
import {ProfileHeader} from './ui/ProfileHeader/ProfileHeader'
import {ProfilePostsList} from './ui/ProfilePostsList/ProfilePostsList'

type ProfileType = {
    isLoadingPosts?: boolean
    isLoadingUser?: boolean
    mode: ComponentMode
    user: PublicProfileType | undefined
    userPosts: Pick<PostsType, 'items'> | undefined
}
export const Profile = ({isLoadingPosts, isLoadingUser, mode, user, userPosts}: ProfileType) => {
    return (
        <>
            <ProfileWrapper>
                <ProfileHeader isLoadingUser={isLoadingUser} mode={mode} user={user} />
                <ProfilePostsList isLoadingPosts={isLoadingPosts} posts={userPosts} />
            </ProfileWrapper>
        </>
    )
}
