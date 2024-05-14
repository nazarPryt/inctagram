import {useFollowUnFollowMutation} from '@/features/Follow-UnFollow/api/follow-unFollow.api'

export const useFollowUnFollow = (selectedUserId: number) => {
    const [followUnFollow] = useFollowUnFollowMutation()

    const handleFollowUnFollow = () => {
        followUnFollow({
            selectedUserId,
        })
    }

    return {
        handleFollowUnFollow,
    }
}
