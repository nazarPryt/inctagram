import {rtkQuery} from '@/_app/Api/client/RTKQuery'

export const registrationConfirmationAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        registrationConfirmation: build.mutation<void, {confirmationCode: string}>({
            query: body => ({
                body,
                method: 'POST',
                url: `auth/registration-confirmation`,
            }),
        }),
    }),
})
export const {useRegistrationConfirmationMutation} = registrationConfirmationAPI
