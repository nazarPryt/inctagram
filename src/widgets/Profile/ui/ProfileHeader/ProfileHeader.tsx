import {PATH} from '@/_app/AppSettings/PATH'
import {SetSelectedChatIdAC} from '@/_app/Store/slices/messengerSlice'
import {PublicProfileTypes} from '@/entities/PublicProfile/api/publicProfile.types'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {ComponentMode, ModeItems} from '@/shared/hooks/useMode'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {ProfileHeaderWrapper} from './ProfileHeader.styled'
import {ProfileHeaderSkeleton} from './ProfileHeaderSkeleton'

type PropsType = {isLoadingUser?: boolean; mode: ComponentMode; user: PublicProfileTypes | undefined}

export const ProfileHeader = ({isLoadingUser, mode, user}: PropsType) => {
    const {t} = useTranslation()
    const router = useRouter()
    const dispatch = useAppDispatch()
    const handler = () => {
        dispatch(SetSelectedChatIdAC(user!.id))
        void router.push(PATH.MESSENGER)
    }
    const renderSettingsBox: ModeItems = {
        fellow: (
            <div className={'settingsBox'}>
                <Button>Follow</Button>
                <Button onClick={handler} variant={'contained'}>
                    Send Message
                </Button>
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
    if (user) {
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

    return null
}
