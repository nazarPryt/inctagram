import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {SetFollowUnFollowUserNameAC} from '@/_app/Store/slices/paramsSlice'

import {AuthProfileSchema} from '../helpers/authProfile.schema'

export const authProfileApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAuthProfile: build.query({
            async onQueryStarted(args, {dispatch}) {
                dispatch(SetFollowUnFollowUserNameAC(args))
            },
            providesTags: ['AuthProfile'],
            query: userName => ({
                method: 'GET',
                url: `users/${userName}`,
            }),
            transformResponse: response => {
                return AuthProfileSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useGetAuthProfileQuery} = authProfileApi
