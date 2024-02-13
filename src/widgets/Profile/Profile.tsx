import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {PostsType} from '@/entities/UserPosts/api/types'

import {ProfileWrapper} from './Profile.styled'
import {ProfileHeader, ProfileHeaderMode} from './ui/ProfileHeader/ProfileHeader'
import {ProfilePostsList} from './ui/ProfilePostsList/ProfilePostsList'

type ProfileType = {
    isLoadingPosts?: boolean
    isLoadingUser?: boolean
    user: PublicProfileType
    userPosts: Pick<PostsType, 'items'>
} & ProfileHeaderMode
export const Profile = ({isLoadingPosts, isLoadingUser, mode, user, userPosts}: ProfileType) => {
    return (
        <ProfileWrapper>
            <ProfileHeader isLoadingUser={isLoadingUser} mode={mode} user={user} />
            <ProfilePostsList isLoadingPosts={isLoadingPosts} posts={userPosts} />
        </ProfileWrapper>
    )
}
