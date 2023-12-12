import {api} from 'redux/api/api'
import cookie from 'react-cookies'
import {accessToken, refreshToken} from 'shared/constants/constants'

export const logOutAPI = api.injectEndpoints({
    endpoints: build => ({
        logOut: build.mutation<void, void>({
            query: () => ({
                url: `auth/logout`,
                method: 'POST',
                credentials: 'include',
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    dispatch(api.util?.resetApiState())
                    cookie.remove(accessToken)
                    cookie.remove(refreshToken)
                } catch (e) {
                    console.log(e)
                }
            },
        }),
    }),
})
export const {useLogOutMutation} = logOutAPI
