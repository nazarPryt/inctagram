import {useState} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {SetDialoguePartnerIdAC} from '@/_app/Store/slices/messengerSlice'
import {useGetAuthProfileQuery} from '@/entities/Profile/AuthProfile/api/authProfile.api'
import {PublicProfileType} from '@/entities/Profile/PublicProfile/helpers/publicProfile.schema'
import {useFollowUnFollow} from '@/features/Follow-UnFollow/hook/useFollowUnFollow'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {ComponentMode, ModeVariant} from '@/shared/hooks/useMode'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Followers} from '@/widgets/Profile/Followers'
import {Following} from '@/widgets/Profile/Following'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {ProfileHeaderWrapper} from './ProfileHeader.styled'
import {ProfileHeaderSkeleton} from './ProfileHeaderSkeleton'

type PropsType = {isLoadingUser?: boolean; mode: ComponentMode; user: PublicProfileType | undefined}

export const ProfileHeader = ({isLoadingUser, mode, user}: PropsType) => {
    const [isFollowersModalOpen, setIsFollowersModalOpen] = useState(false)
    const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false)
    const {data: authProfile, isLoading: authProfileLoading} = useGetAuthProfileQuery(user?.userName, {
        skip: !user?.userName || mode === 'publick',
    })
    const {handleFollowUnFollow} = useFollowUnFollow(authProfile && authProfile.id)

    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const router = useRouter()

    const sendMessageHandler = () => {
        dispatch(SetDialoguePartnerIdAC(user!.id))
        void router.push(PATH.MESSENGER)
    }
    const openFollowersHandler = () => {
        setIsFollowersModalOpen(true)
    }

    const handleFollowersModalClose = () => {
        setIsFollowersModalOpen(false)
    }
    const openFollowingHandler = () => {
        setIsFollowingModalOpen(true)
    }

    const handleFollowingModalClose = () => {
        setIsFollowingModalOpen(false)
    }
    const renderSettingsBox: ModeVariant = {
        fellow: (
            <div className={'settingsBox'}>
                {authProfile && authProfile.isFollowing ? (
                    <Button onClick={handleFollowUnFollow} variant={'outlined'}>
                        {t.profile.unFollow}
                    </Button>
                ) : (
                    <Button onClick={handleFollowUnFollow}>{t.profile.follow}</Button>
                )}
                <Button onClick={sendMessageHandler} variant={'contained'}>
                    {t.profile.sendMessage}
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
    const clickable = (
        <>
            <button onClick={openFollowingHandler}>
                <span>{user!.userMetadata.following}</span>
                {t.profile.following}
            </button>
            <button onClick={openFollowersHandler}>
                <span>{user!.userMetadata.followers}</span>
                {t.profile.followers}
            </button>
            <div>
                <span>{user!.userMetadata.publications}</span>
                {t.profile.publications}
            </div>
        </>
    )
    const unClickable = (
        <>
            <div>
                <span>{user!.userMetadata.following}</span>
                {t.profile.following}
            </div>
            <div>
                <span>{user!.userMetadata.followers}</span>
                {t.profile.followers}
            </div>
            <div>
                <span>{user!.userMetadata.publications}</span>
                {t.profile.publications}
            </div>
        </>
    )

    const renderStatisticsBox: ModeVariant = {
        fellow: clickable,
        myProfile: clickable,
        publick: unClickable,
    }

    if (isLoadingUser) {
        return <ProfileHeaderSkeleton />
    }
    if (!user) {
        return null
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

                <>
                    <div className={'profileStatistics'}>{renderStatisticsBox[mode]}</div>
                    <p>{user.aboutMe}</p>
                </>
            </div>
            <Followers
                handleFollowersModalClose={handleFollowersModalClose}
                isFollowersModalOpen={isFollowersModalOpen}
                userName={user.userName}
            />
            <Following
                handleFollowingModalClose={handleFollowingModalClose}
                isFollowingModalOpen={isFollowingModalOpen}
                userName={user.userName}
            />
        </ProfileHeaderWrapper>
    )
}
