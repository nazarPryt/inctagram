import React from 'react'

import { ProfileWrapper } from 'widgets/Profile/Profile.styled'
import { ProfileHeader } from 'widgets/Profile/ui/ProfileHeader/ProfileHeader'
import { ProfilePostsList } from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList'

export const Profile = ({ userId }: { userId: number | null }) => {
  return (
    <ProfileWrapper>
      <ProfileHeader />
      <ProfilePostsList userId={userId} />
    </ProfileWrapper>
  )
}
