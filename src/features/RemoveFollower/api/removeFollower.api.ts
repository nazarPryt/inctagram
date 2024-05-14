import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {RootState} from '@/_app/Store/store'
import {authProfileApi} from '@/entities/Profile/AuthProfile/api/authProfile.api'

export const removeFollowerApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        removeFollower: build.mutation<void, number>({
            // invalidatesTags: ['AuthProfile'],
            // async onQueryStarted(arg, {dispatch, getState, queryFulfilled}) {
            //     const state = getState() as RootState
            //     const userName = state.params.followUnFollow.userName
            //     const patchResult = dispatch(
            //         authProfileApi.util.updateQueryData('getAuthProfile', userName, draft => {
            //             Object.assign(draft, {...draft, isFollowing: !draft.isFollowing})
            //         })
            //     )
            //
            //     try {
            //         await queryFulfilled
            //     } catch {
            //         patchResult.undo()
            //     }
            // },
            query: userId => ({
                method: 'DELETE',
                url: `users/follower/${userId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useRemoveFollowerMutation} = removeFollowerApi
