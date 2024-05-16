import {FollowingItemSkeleton} from '@/widgets/Profile/Following/ui/FollowingItem/FollowingItemSkeleton'

import {FollowingListStyled} from './FollowingList.styled'

export const FollowingListSkeleton = () => {
    return (
        <FollowingListStyled>
            <FollowingItemSkeleton />
            <FollowingItemSkeleton />
            <FollowingItemSkeleton />
        </FollowingListStyled>
    )
}
