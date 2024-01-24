import {api} from 'redux/api/api'
import {ResponseType} from 'redux/types/authTypes'

export const registrationConfirmationAPI = api.injectEndpoints({
    endpoints: build => ({
        registrationConfirmation: build.mutation<ResponseType, {confirmationCode: string}>({
            query: body => ({
                body,
                method: 'POST',
                url: `auth/registration-confirmation`,
            }),
        }),
    }),
})
export const {useRegistrationConfirmationMutation} = registrationConfirmationAPI
