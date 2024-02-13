import {ReactNode} from 'react'

import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {PATH} from '@/shared/constants/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {ProfileHeaderWrapper} from './ProfileHeader.styled'
import {ProfileHeaderSkeleton} from './ProfileHeaderSkeleton'

export type ProfileHeaderMode = 'fellow' | 'myProfile' | 'publick'

type NameItem = {
    [key in ProfileHeaderMode]: ReactNode
}
type PropsType = {isLoadingUser?: boolean; mode: ProfileHeaderMode; user: PublicProfileType}

export const ProfileHeader = ({isLoadingUser, mode, user}: PropsType) => {
    const {t} = useTranslation()

    const renderSettingsBox: NameItem = {
        fellow: (
            <div className={'settingsBox'}>
                <Button>Follow</Button>
                <Button variant={'contained'}>Send Message</Button>
            </div>
        ),
        myProfile: (
            <Button asT={Link} href={PATH.PROFILE_SETTINGS} variant={'contained'}>
                {t.profile.settingsBtn}
            </Button>
        ),
        publick: <></>,
    }

    if (isLoadingUser) {
        return <ProfileHeaderSkeleton />
    }

    return (
        <ProfileHeaderWrapper>
            <div>
                <Avatar size={205} src={user.avatars[0]?.url} userName={user.userName} />
            </div>
            <div className={'profileData'}>
                <div className={'profileHeader'}>
                    <h2>{user.userName}</h2>
                    {renderSettingsBox[mode]}
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
                <p>{user.aboutMe}</p>
            </div>
        </ProfileHeaderWrapper>
    )
}
