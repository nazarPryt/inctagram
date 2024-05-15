import {FollowingSchemaType} from '@/entities/Profile/Following/helpers/following.schema'
import {EmptyFollowingList} from '@/widgets/Profile/Following/ui/EmptyFollowingList/EmptyFollowingList'
import {FollowingItem} from '@/widgets/Profile/Following/ui/FollowingItem'

import {FollowingListStyled} from './FollowingList.styled'
import {FollowingListSkeleton} from './FollowingListSkeleton'

type PropsType = {
    following: FollowingSchemaType[]
    isLoading: boolean
}
export const FollowingList = ({following, isLoading}: PropsType) => {
    if (isLoading) {
        return <FollowingListSkeleton />
    }
    if (!following.length) {
        return <EmptyFollowingList />
    }

    return (
        <FollowingListStyled>
            {following.map(following => {
                return <FollowingItem following={following} key={following.id} />
            })}
        </FollowingListStyled>
    )
}
