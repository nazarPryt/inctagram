import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {RootState} from '@/_app/Store/store'
import {authProfileApi} from '@/entities/Profile/AuthProfile/api/authProfile.api'

export const followUnFollowAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        followUnFollow: build.mutation<void, {selectedUserId: number}>({
            invalidatesTags: ['AuthProfile'],
            async onQueryStarted(arg, {dispatch, getState, queryFulfilled}) {
                const state = getState() as RootState
                const userName = state.params.followUnFollow.userName
                const patchResult = dispatch(
                    authProfileApi.util.updateQueryData('getAuthProfile', userName, draft => {
                        Object.assign(draft, {...draft, isFollowing: !draft.isFollowing})
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
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
