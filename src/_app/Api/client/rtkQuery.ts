import {baseQueryWithReAuth} from '@/_app/Api/client/baseQueryWithReAuth'
import {appSettings} from '@/_app/AppSettings'
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {createApi} from '@reduxjs/toolkit/query/react'

export const rtkQuery = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
    reducerPath: 'api',
    tagTypes: [
        'User',
        'AllPosts',
        'ViewUserPost',
        'Me',
        'Sessions',
        'UserPosts',
        'Notifications',
        'SearchUser',
        'Messages',
        'Chats',
        'PublicProfile',
    ],
})

export const countryApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: appSettings.env.COUNTRIES_URL}),
    endpoints: () => ({}),
    reducerPath: 'countryApi',
    tagTypes: ['AllCountries', 'CountryCities'],
})
