import {PATH} from '@/_app/AppSettings'
import {FollowerSchemaType} from '@/entities/Profile/Followers/helpers/followers.schema'
import {Avatar, Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {FollowerItemStyled} from './FollowerItem.styled'

type PropsType = {
    follower: FollowerSchemaType
}
export const FollowerItem = ({follower}: PropsType) => {
    const avatar = follower.avatars.length ? follower.avatars[0].url : ''

    return (
        <FollowerItemStyled>
            <div className={'userInfo'}>
                <div>
                    <Avatar size={40} src={avatar} userName={follower.userName} />
                </div>
                <Link href={`${PATH.USER_PROFILE}/${follower.userId}`}>{follower.userName}</Link>
            </div>
            <div className={'buttonsGroup'}>
                <Button>Follow</Button>
                <Button variant={'contained'}>Delete</Button>
            </div>
        </FollowerItemStyled>
    )
}
