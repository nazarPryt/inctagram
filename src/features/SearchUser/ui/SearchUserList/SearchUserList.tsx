import {SearchUserItemType} from '@/features/SearchUser/helpers/SearchUserResponse.schema'
import {SearchUserItem} from '@/features/SearchUser/ui/SearchUserItem'
import {SearchUserListSkeleton} from '@/features/SearchUser/ui/SearchUserListSkeleton'

import {SearchUserListStyled} from './SearchUserList.styled'

type PropsType = {
    isLoading: boolean
    users: SearchUserItemType[]
}
export const SearchUserList = ({isLoading, users}: PropsType) => {
    if (isLoading) {
        return <SearchUserListSkeleton />
    }

    return (
        <SearchUserListStyled>
            {users.map(user => {
                return <SearchUserItem key={user.id} user={user} />
            })}
        </SearchUserListStyled>
    )
}
