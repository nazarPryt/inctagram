import {PATH} from '@/_app/AppSettings'
import {FollowerSchemaType} from '@/entities/Profile/Followers/helpers/followers.schema'
import {useFollowUnFollow} from '@/features/Follow-UnFollow/hook/useFollowUnFollow'
import {useRemoveFollowerMutation} from '@/features/RemoveFollower/api/removeFollower.api'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {FollowerItemStyled} from './FollowerItem.styled'

type PropsType = {
    follower: FollowerSchemaType
}
export const FollowerItem = ({follower}: PropsType) => {
    const {handleFollowUnFollow} = useFollowUnFollow(follower.userId)
    const avatar = follower.avatars.length ? follower.avatars[0].url : ''
    const [removeFollower, {isLoading: removingIsLoading}] = useRemoveFollowerMutation()

    const handleRemoveFollower = () => {
        removeFollower(follower.userId)
    }

    return (
        <FollowerItemStyled>
            <div className={'userInfo'}>
                <div>
                    <Avatar size={40} src={avatar} userName={follower.userName} />
                </div>
                <Link href={`${PATH.USER_PROFILE}/${follower.userId}`}>{follower.userName}</Link>
            </div>
            <div className={'buttonsGroup'}>
                {!follower.isFollowedBy ? (
                    <Button onClick={handleFollowUnFollow}>Follow</Button>
                ) : (
                    <Button onClick={handleFollowUnFollow} variant={'outlined'}>
                        Un Follow
                    </Button>
                )}

                <Button disabled={removingIsLoading} onClick={handleRemoveFollower} variant={'contained'}>
                    Delete
                </Button>
            </div>
        </FollowerItemStyled>
    )
}
