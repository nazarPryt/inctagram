import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {LoginRequest, LoginResponse} from './login.types'

export const loginAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: body => ({
                body,
                method: 'POST',
                url: `auth/login`,
            }),
        }),
    }),
})
export const {useLoginMutation} = loginAPI
