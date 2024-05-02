import cookie from 'react-cookies'

import {appSettings} from '@/_app/AppSettings'
import {setAccessToken} from '@/shared/utils/setAccessToken'
import {BaseQueryFn, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/dist/query/react'
import {Mutex} from 'async-mutex'

import {baseQuery} from './baseQuery'

const mutex = new Mutex()

export const baseQueryWithReAuth: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401 && api.endpoint !== 'login') {
        // try to get a new token
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()

            try {
                const refreshResult = (await baseQuery(
                    {
                        method: 'POST',
                        url: 'auth/update-tokens',
                    },
                    api,
                    extraOptions
                )) as {data: {accessToken: string}}

                if (refreshResult.data.accessToken) {
                    await setAccessToken(refreshResult.data.accessToken)
                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions)
                }
            } catch (e) {
                cookie.remove(appSettings.constants.accessToken)
                cookie.remove(appSettings.constants.refreshToken)
            } finally {
                release()
            }
        } else {
            await mutex.waitForUnlock()
        }
    }

    return result
}
