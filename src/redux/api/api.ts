import * as process from 'process'
import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import cookie from 'react-cookies'
import {accessToken} from 'shared/constants/constants'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: headers => {
        const token = cookie.load(accessToken)

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = (await baseQuery(
            {
                url: 'auth/update-tokens',
                method: 'POST',
            },
            api,
            extraOptions
        )) as {data: {accessToken: string}}

        if (refreshResult.data.accessToken) {
            cookie.save(accessToken, refreshResult.data.accessToken as string, {httpOnly: false})

            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
        } else {
            await baseQuery(
                {
                    url: 'auth/logout',
                    method: 'POST',
                },
                api,
                extraOptions
            )
        }
    }
    return result
}

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['UserAvatar', 'Posts', 'Post'],
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
})
