import cookie from 'react-cookies'

import * as process from 'process'

import {accessToken, refreshToken} from '@/shared/constants/constants'
import {BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    prepareHeaders: headers => {
        const token = cookie.load(accessToken)

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
})

const baseQueryWithReAuth: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (
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

export const api = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
    reducerPath: 'api',
    tagTypes: ['User', 'AllPosts', 'Post', 'Me', 'Sessions', 'UserPosts'],
})

// const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
//     args,
//     api,
//     extraOptions
// ) => {
//     let result = await baseQuery(args, api, extraOptions)
//
//     if (result.error && result.error.status === 401) {
//         // try to get a new token
//         const refreshResult = (await baseQuery(
//             {
//                 url: 'auth/update-tokens',
//                 method: 'POST',
//             },
//             api,
//             extraOptions
//         )) as {data: {accessToken: string}}
//
//         if (refreshResult.data.accessToken) {
//             cookie.save(accessToken, refreshResult.data.accessToken as string, {httpOnly: false, path: '/'})
//
//             // retry the initial query
//             result = await baseQuery(args, api, extraOptions)
//         } else {
//             await baseQuery(
//                 {
//                     url: 'auth/logout',
//                     method: 'POST',
//                 },
//                 api,
//                 extraOptions
//             )
//         }
//     }
//     return result
// }
