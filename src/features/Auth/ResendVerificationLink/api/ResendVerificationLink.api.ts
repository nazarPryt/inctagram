import {api} from '@/redux/api/api'
import {ResponseType} from '@/redux/types/authTypes'

export const ResendVerificationLinkAPI = api.injectEndpoints({
    endpoints: build => ({
        resendConfirmationLink: build.mutation<ResponseType, {email: string}>({
            query: body => ({
                body,
                method: 'POST',
                url: `auth/registration-email-resending`,
            }),
        }),
    }),
})
export const {useResendConfirmationLinkMutation} = ResendVerificationLinkAPI
