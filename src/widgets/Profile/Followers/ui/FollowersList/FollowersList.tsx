import {FollowerSchemaType} from '@/entities/Profile/Followers/helpers/followers.schema'
import {FollowerItem} from '@/widgets/Profile/Followers/ui/FollowerItem'

import {EmptyFollowersList} from '../EmptyFollowersList/EmptyFollowersList'
import {FollowersListStyled} from './FollowersList.styled'
import {FollowersListSkeleton} from './FollowersListSkeleton'

type PropsType = {
    followers: FollowerSchemaType[]
    handleFollowersModalClose: () => void
    isLoading: boolean
}
export const FollowersList = ({followers, handleFollowersModalClose, isLoading}: PropsType) => {
    if (isLoading) {
        return <FollowersListSkeleton />
    }
    if (!followers.length) {
        return <EmptyFollowersList />
    }

    return (
        <FollowersListStyled>
            {followers.map(follower => {
                return (
                    <FollowerItem
                        follower={follower}
                        handleFollowersModalClose={handleFollowersModalClose}
                        key={follower.id}
                    />
                )
            })}
        </FollowersListStyled>
    )
}
