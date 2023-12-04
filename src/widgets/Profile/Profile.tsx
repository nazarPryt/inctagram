import React from 'react'
import {ProfileWrapper} from 'widgets/Profile/Profile.styled'
import {ProfilePostsList} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList'
import {ProfileHeader} from 'widgets/Profile/ui/ProfileHeader/ProfileHeader'

export const Profile = () => {
    return (
        <ProfileWrapper>
            <ProfileHeader />
            <ProfilePostsList />
        </ProfileWrapper>
    )
}
