import React from 'react'
import {ProfileHeaderWrapper} from 'widgets/Profile/ui/ProfileHeader/ProfileHeader.styled'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {ProfileAvatar} from 'widgets/Profile/ui/ProfileAvatar/ProfileAvatar'
import {Loader} from 'shared/components/Loader/Loader'
import {useSession} from 'next-auth/react'
import {useGetUserProfileQuery} from 'redux/api/profileAPI'
import {ProfileHeaderLoader} from 'widgets/Profile/ui/ProfileHeader/ProfileHeaderLoader'

export const ProfileHeader = () => {
    const {data: user, status} = useSession()

    console.log(user)

    const {data: userData, isLoading} = useGetUserProfileQuery(248)

    // if (isLoading) {
    //     return <Loader />
    // }

    if (userData) {
        return (
            <ProfileHeaderWrapper>
                <ProfileAvatar src={userData.avatars[0].url} />
                <div className={'profileData'}>
                    <div className={'profileHeader'}>
                        <h2>
                            {userData.firstName} {userData.lastName}
                        </h2>
                        <Link className={'settingsLink'} href={PATH.PROFILE_SETTINGS}>
                            Profile Settings
                        </Link>
                    </div>
                    <div className={'profileStatistics'}>
                        <div>
                            <span>2 218</span>
                            Following
                        </div>
                        <div>
                            <span>2 358</span>
                            Followers
                        </div>
                        <div>
                            <span>2 764</span>
                            Publications
                        </div>
                    </div>
                    <p>{userData.aboutMe}</p>
                </div>
            </ProfileHeaderWrapper>
        )
    }
    return <ProfileHeaderLoader />
}
