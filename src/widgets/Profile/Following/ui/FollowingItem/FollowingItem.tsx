import {PATH} from '@/_app/AppSettings'
import {FollowingSchemaType} from '@/entities/Profile/Following/helpers/following.schema'
import {useFollowUnFollow} from '@/features/Follow-UnFollow/hook/useFollowUnFollow'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {FollowingItemStyled} from './FollowingItem.styled'

type PropsType = {
    following: FollowingSchemaType
}
export const FollowingItem = ({following}: PropsType) => {
    const {handleFollowUnFollow} = useFollowUnFollow(following.userId)
    const avatar = following.avatars.length ? following.avatars[0].url : ''

    return (
        <FollowingItemStyled>
            <div className={'userInfo'}>
                <div>
                    <Avatar size={40} src={avatar} userName={following.userName} />
                </div>
                <Link href={`${PATH.USER_PROFILE}/${following.userId}`}>{following.userName}</Link>
            </div>
            <div>
                {following.isFollowing ? (
                    <Button onClick={handleFollowUnFollow} variant={'outlined'}>
                        Un Follow
                    </Button>
                ) : (
                    <Button onClick={handleFollowUnFollow}>Follow</Button>
                )}
            </div>
        </FollowingItemStyled>
    )
}
