import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {RootState} from '@/_app/Store/store'
import {authProfileApi} from '@/entities/Profile/AuthProfile/api/authProfile.api'
import {AuthProfileType} from '@/entities/Profile/AuthProfile/helpers/authProfile.schema'
import {followersApi} from '@/entities/Profile/Followers/api/followers.api'
import {GetFollowersType} from '@/entities/Profile/Followers/helpers/followers.schema'

export const removeFollowerApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        removeFollower: build.mutation<void, number>({
            invalidatesTags: ['Followers', 'AuthProfile'],
            async onQueryStarted(userIdToRemove, {dispatch, getState, queryFulfilled}) {
                const state = getState() as RootState
                const userName = state.params.followUnFollow.userName

                const patchResult = dispatch(
                    followersApi.util.updateQueryData('getFollowers', userName, (draft: GetFollowersType) => {
                        Object.assign(draft, {
                            ...draft,
                            items: draft.items.filter(follower => follower.userId !== userIdToRemove),
                        })
                    })
                )
                const patchResult2 = dispatch(
                    authProfileApi.util.updateQueryData('getAuthProfile', userName, (draft: AuthProfileType) => {
                        const updateFollowers = draft.isFollowing ? draft.followersCount - 1 : draft.followersCount + 1

                        Object.assign(draft, {
                            ...draft,
                            followersCount: updateFollowers,
                        })
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                    patchResult2.undo()
                }
            },
            query: userId => ({
                method: 'DELETE',
                url: `users/follower/${userId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useRemoveFollowerMutation} = removeFollowerApi
