import {FollowerItemSkeleton} from '../FollowerItem/FollowerItemSkeleton'
import {FollowersListStyled} from './FollowersList.styled'

export const FollowersListSkeleton = () => {
    return (
        <FollowersListStyled>
            <FollowerItemSkeleton />
            <FollowerItemSkeleton />
            <FollowerItemSkeleton />
        </FollowersListStyled>
    )
}
