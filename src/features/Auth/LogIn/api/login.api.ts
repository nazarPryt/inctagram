import {api} from 'redux/api/api'

export const loginAPI = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<{accessToken: 'string'}, {email: string; password: string}>({
            query: body => ({
                body,
                method: 'POST',
                url: `auth/login`,
            }),
        }),
    }),
})
export const {useLoginMutation} = loginAPI
