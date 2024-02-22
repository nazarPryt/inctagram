import cookie from 'react-cookies'

import {accessToken, refreshToken} from '@/shared/constants/constants'
import {BaseQueryFn, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/dist/query/react'

import {baseQuery} from './baseQuery'

export const baseQueryWithReAuth: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401 && api.endpoint !== 'login') {
        // try to get a new token

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
                cookie.save(accessToken, refreshResult.data.accessToken as string, {httpOnly: false})
                // retry the initial query
                result = await baseQuery(args, api, extraOptions)
            }
        } catch (e) {
            cookie.remove(accessToken)
            cookie.remove(refreshToken)
        }
    }

    return result
}
