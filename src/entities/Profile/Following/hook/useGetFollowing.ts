import {useGetFollowingQuery} from '@/entities/Profile/Following/api/following.api'

type PropsType = {
    isFollowingModalOpen: boolean
    userName: string
}
export const useGetFollowing = ({isFollowingModalOpen, userName}: PropsType) => {
    const {data, isLoading} = useGetFollowingQuery(userName, {skip: !(userName && isFollowingModalOpen)})

    const following = (data && data.items) ?? []
    const totalFollowing = (data && data.items.length) ?? 0

    return {
        following,
        isLoading,
        totalFollowing,
    }
}
