import cookie from 'react-cookies'

import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {accessToken, refreshToken} from '@/shared/constants/constants'

export const logOutAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        logOut: build.mutation<void, void>({
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    dispatch(rtkQuery.util?.resetApiState())
                    cookie.remove(accessToken)
                    cookie.remove(refreshToken)
                } catch (e) {
                    console.log(e)
                }
            },
            query: () => ({
                credentials: 'include',
                method: 'POST',
                url: `auth/logout`,
            }),
        }),
    }),
    overrideExisting: true,
})
export const {useLogOutMutation} = logOutAPI
