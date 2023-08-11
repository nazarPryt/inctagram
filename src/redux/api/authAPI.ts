import {api} from 'redux/api/api'
import {ResponseType} from 'redux/types/authTypes'

export const authAPI = api.injectEndpoints({
    endpoints: build => ({
        signUpConfirmation: build.mutation<ResponseType, {confirmationCode: string}>({
            query: body => ({
                url: `auth/registration-confirmation`,
                method: 'POST',
                body,
            }),
        }),
    }),
    overrideExisting: false,
})

export const {useSignUpConfirmationMutation} = authAPI
