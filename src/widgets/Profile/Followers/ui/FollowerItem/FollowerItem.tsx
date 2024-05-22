import {PATH} from '@/_app/AppSettings'
import {FollowerSchemaType} from '@/entities/Profile/Followers/helpers/followers.schema'
import {useFollowUnFollow} from '@/features/Follow-UnFollow/hook/useFollowUnFollow'
import {useRemoveFollowerMutation} from '@/features/RemoveFollower/api/removeFollower.api'
import {useAuth} from '@/shared/hooks/useAuth'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {FollowerItemStyled} from './FollowerItem.styled'

type PropsType = {
    follower: FollowerSchemaType
}
export const FollowerItem = ({follower}: PropsType) => {
    const {userId: currentUserId} = useAuth()
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
                {currentUserId !== follower.userId &&
                    (follower.isFollowing ? (
                        <Button onClick={handleFollowUnFollow} variant={'outlined'}>
                            Unfollow
                        </Button>
                    ) : (
                        <Button onClick={handleFollowUnFollow}>Follow</Button>
                    ))}

                <Button disabled={removingIsLoading} onClick={handleRemoveFollower} variant={'contained'}>
                    Delete
                </Button>
            </div>
        </FollowerItemStyled>
    )
}
