import {useGetFollowersQuery} from '@/entities/Profile/Followers/api/followers.api'

type PropsType = {
    isFollowersModalOpen: boolean
    userName: string
}
export const useGetFollowers = ({isFollowersModalOpen, userName}: PropsType) => {
    const {data, isLoading} = useGetFollowersQuery(userName, {skip: !(userName && isFollowersModalOpen)})

    const followers = (data && data.items) ?? []
    const totalCount = (data && data.totalCount) ?? 0

    return {
        followers,
        isLoading,
        totalCount,
    }
}
