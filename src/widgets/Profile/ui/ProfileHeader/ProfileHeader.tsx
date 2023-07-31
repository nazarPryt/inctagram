import React from 'react'
import {useTranslation} from 'shared/hooks/useTranslation'
import {ProfileHeaderWrapper} from 'widgets/Profile/ui/ProfileHeader/ProfileHeader.styled'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {ProfileAvatar} from 'widgets/Profile/ui/ProfileAvatar/ProfileAvatar'
import {useGetUserProfileQuery} from 'redux/api/profileAPI'
import {ProfileHeaderLoader} from 'widgets/Profile/ui/ProfileHeader/ProfileHeaderLoader'

export const ProfileHeader = ({userId}: {userId: number | null}) => {
    const {t} = useTranslation()
    const {data: userData, isLoading} = useGetUserProfileQuery(userId as number)

    if (isLoading) {
        return <ProfileHeaderLoader />
    }

    if (userData) {
        return (
            <ProfileHeaderWrapper>
                <ProfileAvatar src={userData.avatars[0]?.url} />
                <div className={'profileData'}>
                    <div className={'profileHeader'}>
                        <h2>
                            {userData.firstName} {userData.lastName}
                        </h2>
                        <Link className={'settingsLink'} href={PATH.PROFILE_SETTINGS}>
                            {t.profile.settingsBtn}
                        </Link>
                    </div>
                    <div className={'profileStatistics'}>
                        <div>
                            <span>2 218</span>
                            {t.profile.following}
                        </div>
                        <div>
                            <span>2 358</span>
                            {t.profile.followers}
                        </div>
                        <div>
                            <span>2 764</span>
                            {t.profile.publications}
                        </div>
                    </div>
                    <p>{userData.aboutMe}</p>
                </div>
            </ProfileHeaderWrapper>
        )
    }
    return <div>error</div>
}