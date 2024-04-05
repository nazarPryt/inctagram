import {PATH} from '@/_app/AppSettings'
import {SearchUserItemType} from '@/features/SearchUser/helpers/SearchUserResponse.schema'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {SearchUserItemStyled} from './SearchUserItem.styled'

type PropsType = {
    user: SearchUserItemType
}
export const SearchUserItem = ({user}: PropsType) => {
    const avatarSrc = user.avatars.length ? user.avatars[0].url : ''

    return (
        <SearchUserItemStyled>
            <div className={'avatarBox'}>
                <Avatar size={48} src={avatarSrc} userName={user.userName} />
            </div>
            <div className={'rightBox'}>
                <Link href={`${PATH.USER_PROFILE}/${user.id}`}>{user.userName}</Link>
                <h5>
                    {user.firstName ?? ''} {user.lastName ?? ''}
                </h5>
            </div>
        </SearchUserItemStyled>
    )
}
