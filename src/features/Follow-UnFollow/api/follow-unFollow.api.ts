import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {RootState} from '@/_app/Store/store'
import {authProfileApi} from '@/entities/Profile/AuthProfile/api/authProfile.api'
import {AuthProfileType} from '@/entities/Profile/AuthProfile/helpers/authProfile.schema'
import {followersApi} from '@/entities/Profile/Followers/api/followers.api'
import {GetFollowersType} from '@/entities/Profile/Followers/helpers/followers.schema'
import {followingApi} from '@/entities/Profile/Following/api/following.api'
import {GetFollowingType} from '@/entities/Profile/Following/helpers/following.schema'

export const followUnFollowAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        followUnFollow: build.mutation<void, {selectedUserId: number}>({
            invalidatesTags: ['AuthProfile'],
            async onQueryStarted({selectedUserId}, {dispatch, getState, queryFulfilled}) {
                const state = getState() as RootState
                const userName = state.params.followUnFollow.userName ?? ''

                const patchResult = dispatch(
                    authProfileApi.util.updateQueryData('getAuthProfile', userName, (draft: AuthProfileType) => {
                        const updateFollowers = draft.isFollowing ? draft.followersCount - 1 : draft.followersCount + 1

                        Object.assign(draft, {
                            ...draft,
                            followersCount: updateFollowers,
                            isFollowing: !draft.isFollowing,
                        })
                    })
                )
                const patchResult2 = dispatch(
                    followingApi.util.updateQueryData('getFollowing', userName, (draft: GetFollowingType) => {
                        const indexToSwitch = draft.items.findIndex(following => following.userId === selectedUserId)

                        if (indexToSwitch !== -1) {
                            draft.items[indexToSwitch].isFollowing = !draft.items[indexToSwitch].isFollowing // switch to opposite
                        }
                    })
                )

                const patchResult3 = dispatch(
                    followersApi.util.updateQueryData('getFollowers', userName, (draft: GetFollowersType) => {
                        const indexToSwitch = draft.items.findIndex(follower => follower.userId === selectedUserId)

                        if (indexToSwitch !== -1) {
                            draft.items[indexToSwitch].isFollowing = !draft.items[indexToSwitch].isFollowing // switch to opposite
                        }
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                    patchResult2.undo()
                    patchResult3.undo()
                }
            },
            query: body => ({
                body,
                method: 'POST',
                url: 'users/following',
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useFollowUnFollowMutation} = followUnFollowAPI
