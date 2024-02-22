import cookie from 'react-cookies'

import process from 'process'

import {accessToken} from '@/shared/constants/constants'
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

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
