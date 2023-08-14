import {api} from 'redux/api/api'

export const loginAPI = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<{accessToken: 'string'}, {email: string; password: string}>({
            query: body => ({
                url: `auth/login`,
                method: 'POST',
                body,
            }),
        }),
    }),
})
export const {useLoginMutation} = loginAPI
