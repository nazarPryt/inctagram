import cookie from 'react-cookies'

import {appSettings} from '@/_app/AppSettings'
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const baseQuery = fetchBaseQuery({
    baseUrl: appSettings.env.BASE_URL,
    credentials: 'include',
    prepareHeaders: headers => {
        const token = cookie.load(appSettings.constants.accessToken)

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
})
