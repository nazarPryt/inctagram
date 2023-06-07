import {ForgotPasswordArgType, NewPasswordArgType} from 'redux/authAPITypes'
import {api} from 'redux/api/api'
import {SignUpConfirmationRequestType, SignUpRequestType, SignUpResponseType} from 'redux/types/authTypes'

export const authAPI = api.injectEndpoints({
    endpoints: build => ({
        addNewUser: build.mutation<SignUpResponseType, SignUpRequestType>({
            query: body => ({
                url: `auth/registration`,
                method: 'POST',
                body,
            }),
        }),
        signUpConfirmation: build.mutation<SignUpResponseType, SignUpConfirmationRequestType>({
            query: body => ({
                url: `auth/registration-confirmation`,
                method: 'POST',
                body,
            }),
        }),
        forgotPassword: build.mutation<void, ForgotPasswordArgType>({
            query: body => ({
                url: 'auth/password-recovery',
                method: 'POST',
                body,
            }),
        }),
        newPassword: build.mutation<void, NewPasswordArgType>({
            query: body => ({
                url: 'auth/new-password',
                method: 'POST',
                body,
            }),
        }),
    }),
    overrideExisting: false,
})

export const {useAddNewUserMutation, useForgotPasswordMutation, useNewPasswordMutation, useSignUpConfirmationMutation} =
    authAPI
