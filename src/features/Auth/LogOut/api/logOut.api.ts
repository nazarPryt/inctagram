import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {appSettings} from '@/_app/AppSettings'
import {deleteCookie} from 'cookies-next'

export const logOutAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        logOut: build.mutation<void, void>({
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    dispatch(rtkQuery.util?.resetApiState())
                    deleteCookie(appSettings.constants.accessToken)
                    deleteCookie(appSettings.constants.refreshToken)
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
