import {SearchUserItemType} from '@/features/SearchUser/helpers/SearchUserResponse.schema'
import {SearchUserItem} from '@/features/SearchUser/ui/SearchUserItem'
import {SearchUserListSkeleton} from '@/features/SearchUser/ui/SearchUserListSkeleton'

import {SearchUserListStyled} from './SearchUserList.styled'

type PropsType = {
    isLoading: boolean
    users: SearchUserItemType[] | null
}
export const SearchUserList = ({isLoading, users}: PropsType) => {
    const empty = users && users.length === 0

    if (isLoading) {
        return <SearchUserListSkeleton />
    }
    if (empty) {
        return <div>not found</div>
    }

    if (users) {
        return (
            <SearchUserListStyled>
                {users.map(user => {
                    return <SearchUserItem key={user.id} user={user} />
                })}
            </SearchUserListStyled>
        )
    }

    return <div>enter user name</div>
}
