import {rtkQuery} from '@/_app/Api/client/RTKQuery'

export const ResendVerificationLinkAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        resendConfirmationLink: build.mutation<void, {email: string}>({
            query: body => ({
                body,
                method: 'POST',
                url: `auth/registration-email-resending`,
            }),
        }),
    }),
})
export const {useResendConfirmationLinkMutation} = ResendVerificationLinkAPI
