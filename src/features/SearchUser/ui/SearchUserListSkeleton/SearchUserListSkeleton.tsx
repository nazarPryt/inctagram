import {SearchUserListStyled} from '../SearchUserList'
import {SearchUserSkeleton} from '../SearchUserSkeleton'

export const SearchUserListSkeleton = () => {
    return (
        <SearchUserListStyled>
            <SearchUserSkeleton />
            <SearchUserSkeleton />
            <SearchUserSkeleton />
        </SearchUserListStyled>
    )
}
