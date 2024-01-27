import {api} from '@/redux/api/api'
import {ForgotPasswordArgType} from '@/redux/types/authTypes'

export const forgotPasswordAPI = api.injectEndpoints({
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
