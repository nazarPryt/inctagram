import {useGetUserProfileQuery} from '@/redux/api/profileAPI'
import {PATH} from '@/shared/constants/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {ProfileHeaderWrapper} from './ProfileHeader.styled'
import {ProfileHeaderSkeleton} from './ProfileHeaderSkeleton'

export const ProfileHeader = () => {
    const {t} = useTranslation()
    const {data: userData, isLoading} = useGetUserProfileQuery()

    if (isLoading) {
        return <ProfileHeaderSkeleton />
    }

    if (userData) {
        return (
            <ProfileHeaderWrapper>
                <div>
                    <Avatar size={205} src={userData.avatars[0]?.url} userName={userData.firstName} />
                </div>
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
