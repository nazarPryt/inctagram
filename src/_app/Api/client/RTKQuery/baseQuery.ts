import {appSettings} from '@/_app/AppSettings'
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {getCookie} from 'cookies-next'

export const baseQuery = fetchBaseQuery({
    baseUrl: appSettings.env.BASE_URL,
    credentials: 'include',
    prepareHeaders: headers => {
        const token = getCookie(appSettings.constants.accessToken)

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
})
