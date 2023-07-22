import React from 'react'
import {ProfileHeaderWrapper} from 'widgets/Profile/ui/ProfileHeader/ProfileHeader.styled'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {ProfileAvatar} from 'widgets/Profile/ui/ProfileAvatar/ProfileAvatar'
import {useGetUserProfileQuery} from 'redux/api/profileAPI'
import {Loader} from 'shared/components/Loader/Loader'
import {useSession} from 'next-auth/react'

export const ProfileHeader = () => {
    const {data: user} = useSession()
    console.log(user)
    const {data, isLoading} = useGetUserProfileQuery(248)

    if (isLoading) {
        return <Loader />
    }
    if (data) {
        return (
            <ProfileHeaderWrapper>
                <ProfileAvatar src={data.avatars[0].url} />
                <div className={'profileData'}>
                    <div className={'profileHeader'}>
                        <h2>
                            {data.firstName} {data.lastName}
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
                    <p>{data.aboutMe}</p>
                </div>
            </ProfileHeaderWrapper>
        )
    }
    return <div>header</div>
}
