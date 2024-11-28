import {PATH} from '@/_app/AppSettings'
import {FollowingSchemaType} from '@/entities/Profile/Following/helpers/following.schema'
import {useFollowUnFollow} from '@/features/Follow-UnFollow/hook/useFollowUnFollow'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {ComponentMode, ModeVariant} from '@/shared/hooks/useMode'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {FollowingItemStyled} from './FollowingItem.styled'

type PropsType = {
    following: FollowingSchemaType
    handleFollowingModalClose: () => void
}
export const FollowingItem = ({following, handleFollowingModalClose}: PropsType) => {
    const ownerId = useAppSelector(state => state.userAuth.userId)
    const {handleFollowUnFollow} = useFollowUnFollow(following.userId)
    const avatar = following.avatars.length ? following.avatars[0].url : ''

    const getMode = (): ComponentMode => {
        let mode: ComponentMode = 'publick'

        if (ownerId === following.userId) {
            mode = 'myProfile'
        } else if (following.isFollowing) {
            mode = 'fellow'
        }

        return mode
    }

    const render: ModeVariant = {
        fellow: (
            <Button onClick={handleFollowUnFollow} variant={'outlined'}>
                Un Follow
            </Button>
        ),
        myProfile: <></>,
        publick: <Button onClick={handleFollowUnFollow}>Follow</Button>,
    }

    return (
        <FollowingItemStyled>
            <div className={'userInfo'}>
                <div>
                    <Avatar size={40} src={avatar} userName={following.userName} />
                </div>
                <Link href={`${PATH.USER_PROFILE}/${following.userId}`} onClick={handleFollowingModalClose}>
                    {following.userName}
                </Link>
            </div>
            <div>{render[getMode()]}</div>
        </FollowingItemStyled>
    )
}
