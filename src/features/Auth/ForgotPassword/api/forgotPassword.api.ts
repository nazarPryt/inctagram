import { api } from 'redux/api/api'
import { ForgotPasswordArgType } from 'redux/types/authTypes'

export const forgotPasswordAPI = api.injectEndpoints({
  endpoints: build => ({
    forgotPassword: build.mutation<void, ForgotPasswordArgType>({
      query: body => ({
        url: 'auth/password-recovery',
        method: 'POST',
        body,
      }),
    }),
  }),
})
export const { useForgotPasswordMutation } = forgotPasswordAPI
