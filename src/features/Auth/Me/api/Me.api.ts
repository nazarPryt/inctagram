import {api} from 'redux/api/api'

type authMeDataType = {
    userId: number
    userName: string
    email: string
}

export const meApi = api.injectEndpoints({
    endpoints: build => ({
        me: build.query<authMeDataType, void>({
            query: () => ({
                url: `auth/me`,
            }),
            providesTags: ['Me'],
        }),
    }),
})
export const {useMeQuery} = meApi
