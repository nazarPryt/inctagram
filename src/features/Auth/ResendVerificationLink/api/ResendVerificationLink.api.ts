import { api } from 'redux/api/api'
import { ResponseType } from 'redux/types/authTypes'

export const ResendVerificationLinkAPI = api.injectEndpoints({
  endpoints: build => ({
    resendConfirmationLink: build.mutation<ResponseType, { email: string }>({
      query: body => ({
        url: `auth/registration-email-resending`,
        method: 'POST',
        body,
      }),
    }),
  }),
})
export const { useResendConfirmationLinkMutation } = ResendVerificationLinkAPI
