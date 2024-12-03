import {FollowingSchemaType} from '@/entities/Profile/Following/helpers/following.schema'
import {EmptyFollowingList} from '@/widgets/Profile/Following/ui/EmptyFollowingList/EmptyFollowingList'
import {FollowingItem} from '@/widgets/Profile/Following/ui/FollowingItem'

import {FollowingListStyled} from './FollowingList.styled'
import {FollowingListSkeleton} from './FollowingListSkeleton'

type PropsType = {
    following: FollowingSchemaType[]
    handleFollowingModalClose: () => void
    isLoading: boolean
}
export const FollowingList = ({following, handleFollowingModalClose, isLoading}: PropsType) => {
    if (isLoading) {
        return <FollowingListSkeleton />
    }
    if (!following.length) {
        return <EmptyFollowingList />
    }

    return (
        <FollowingListStyled>
            {following.map(following => {
                return (
                    <FollowingItem
                        following={following}
                        handleFollowingModalClose={handleFollowingModalClose}
                        key={following.id}
                    />
                )
            })}
        </FollowingListStyled>
    )
}
