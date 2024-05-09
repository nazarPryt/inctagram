import {useState} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {SetDialoguePartnerIdAC} from '@/_app/Store/slices/messengerSlice'
import {useGetAuthProfile} from '@/entities/Profile/AuthProfile/hook/useGetAuthProfile'
import {PublicProfileType} from '@/entities/Profile/PublicProfile/helpers/publicProfile.schema'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {ComponentMode, ModeVariant} from '@/shared/hooks/useMode'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {ProfileHeaderWrapper} from './ProfileHeader.styled'
import {ProfileHeaderSkeleton} from './ProfileHeaderSkeleton'

type PropsType = {isLoadingUser?: boolean; mode: ComponentMode; user: PublicProfileType | undefined}

export const ProfileHeader = ({isLoadingUser, mode, user}: PropsType) => {
    const [openFollowers, setOpenFollowers] = useState(false)
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const router = useRouter()

    const sendMessageHandler = () => {
        dispatch(SetDialoguePartnerIdAC(user!.id))
        void router.push(PATH.MESSENGER)
    }
    const openFollowersHandler = () => {
        dispatch(SetDialoguePartnerIdAC(user!.id))
        void router.push(PATH.MESSENGER)
    }
    const renderSettingsBox: ModeVariant = {
        fellow: (
            <div className={'settingsBox'}>
                <Button>Follow</Button>
                <Button onClick={sendMessageHandler} variant={'contained'}>
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
                        <button onClick={openFollowersHandler}>
                            <span>2 358</span>
                            {t.profile.followers}
                        </button>
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
