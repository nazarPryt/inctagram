import {baseQueryWithReAuth} from '@/_app/Api/client/baseQueryWithReAuth'
import {createApi} from '@reduxjs/toolkit/query/react'

export const rtkQuery = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
    reducerPath: 'api',
    tagTypes: ['User', 'AllPosts', 'Post', 'Me', 'Sessions', 'UserPosts'],
})
