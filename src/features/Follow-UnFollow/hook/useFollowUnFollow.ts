import {useFollowUnFollowMutation} from '@/features/Follow-UnFollow/api/follow-unFollow.api'

export const useFollowUnFollow = (selectedUserId: number | undefined) => {
    const [followUnFollow] = useFollowUnFollowMutation()

    const handleFollowUnFollow = () => {
        if (selectedUserId) {
            followUnFollow({
                selectedUserId,
            })
        }
    }

    return {
        handleFollowUnFollow,
    }
}
