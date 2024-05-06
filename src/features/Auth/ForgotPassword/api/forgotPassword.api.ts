import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {ForgotPasswordFormData} from '../helpers/forgotPassword.schema'

export const forgotPasswordAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        forgotPassword: build.mutation<void, ForgotPasswordFormData>({
            query: body => ({
                body,
                method: 'POST',
                url: 'auth/password-recovery',
            }),
        }),
    }),
})
export const {useForgotPasswordMutation} = forgotPasswordAPI
