import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {PATH} from '@/shared/constants/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {ProfileHeaderWrapper} from './ProfileHeader.styled'
import {ProfileHeaderSkeleton} from './ProfileHeaderSkeleton'

export type ProfileHeaderMode = {
    mode: 'fellow' | 'myProfile' | 'public'
}

type PropsType = {isLoadingUser?: boolean; user: PublicProfileType} & ProfileHeaderMode

export const ProfileHeader = ({isLoadingUser, mode, user}: PropsType) => {
    const {t} = useTranslation()

    const renderSettingsBox = () => {
        console.log('mode', mode)
        switch (mode) {
            case 'public': {
                console.log('case public')

                return <></>
            }
            case 'myProfile': {
                console.log('case {isLoggedIn: true}')

                return (
                    <Button asT={Link} href={PATH.PROFILE_SETTINGS} variant={'contained'}>
                        {t.profile.settingsBtn}
                    </Button>
                )
            }
            case 'fellow': {
                console.log('case {isLoggedIn: false}')

                return (
                    <div className={'settingsBox'}>
                        <Button>Follow</Button>
                        <Button variant={'contained'}>Send Message</Button>
                    </div>
                )
            }
        }
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
                    {renderSettingsBox()}
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
