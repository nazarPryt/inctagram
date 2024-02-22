import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {ForgotPasswordArgType} from './forgotPassword.types'

export const forgotPasswordAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        forgotPassword: build.mutation<void, ForgotPasswordArgType>({
            query: body => ({
                body,
                method: 'POST',
                url: 'auth/password-recovery',
            }),
        }),
    }),
})
export const {useForgotPasswordMutation} = forgotPasswordAPI
