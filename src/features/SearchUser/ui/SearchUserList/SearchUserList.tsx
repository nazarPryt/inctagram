import {SearchUserItemType} from '@/features/SearchUser/helpers/SearchUserResponse.schema'
import {SearchUserItem} from '@/features/SearchUser/ui/SearchUserItem'

import {SearchUserListStyled} from './SearchUserList.styled'

type PropsType = {
    users: SearchUserItemType[]
}
export const SearchUserList = ({users}: PropsType) => {
    return (
        <SearchUserListStyled>
            {users.map(user => {
                return <SearchUserItem key={user.id} user={user} />
            })}
        </SearchUserListStyled>
    )
}
