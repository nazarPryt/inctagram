import cookie from 'react-cookies'

import {appSettings} from '@/_app/AppSettings'
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

const BASE_URL = appSettings.env.BASE_URL

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    prepareHeaders: headers => {
        const token = cookie.load(appSettings.constants.accessToken)

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
})
