import {ForgotPasswordArgType, NewPasswordArgType} from 'redux/authAPITypes'
import {api} from 'redux/api/api'
import {SignUpRequestType, SignUpResponseType} from 'redux/types/authTypes'

export const authAPI = api.injectEndpoints({
    endpoints: build => ({
        addNewUser: build.mutation<SignUpResponseType, SignUpRequestType>({
            query: body => ({
                url: `auth/registration`,
                method: 'POST',
                body,
            }),
        }),
        signUpConfirmation: build.mutation<SignUpResponseType, {confirmationCode: string}>({
            query: body => ({
                url: `auth/registration-confirmation`,
                method: 'POST',
                body,
            }),
        }),
        login: build.mutation<{accessToken: 'string'}, {email: string; password: string}>({
            query: body => ({
                url: `auth/login`,
                method: 'POST',
                body,
            }),
        }),
        resendConfirmationLink: build.mutation<SignUpResponseType, {email: string}>({
            query: body => ({
                url: `auth/registration-email-resending`,
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
        logOut: build.mutation<void, void>({
            query: () => ({
                url: `auth/logout`,
                method: 'POST',
            }),
        }),
    }),
    overrideExisting: false,
})

export const {
    useAddNewUserMutation,
    useForgotPasswordMutation,
    useNewPasswordMutation,
    useSignUpConfirmationMutation,
    useResendConfirmationLinkMutation,
    useLoginMutation,
    useLogOutMutation,
} = authAPI