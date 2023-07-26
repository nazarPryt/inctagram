import React from 'react'
import {ProfileWrapper} from 'widgets/Profile/Profile.styled'
import {ProfilePostsList} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList'
import {ProfileHeader} from 'widgets/Profile/ui/ProfileHeader/ProfileHeader'

export const Profile = ({userId}: {userId: number | null}) => {
    return (
        <ProfileWrapper>
            <ProfileHeader userId={userId} />
            <ProfilePostsList userId={userId} />
        </ProfileWrapper>
    )
}
