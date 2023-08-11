import {api} from 'redux/api/api'
import {ForgotPasswordArgType, NewPasswordArgType, ResponseType} from 'redux/types/authTypes'

export const authAPI = api.injectEndpoints({
    endpoints: build => ({
        signUpConfirmation: build.mutation<ResponseType, {confirmationCode: string}>({
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
    useForgotPasswordMutation,
    useNewPasswordMutation,
    useSignUpConfirmationMutation,
    useLoginMutation,
    useLogOutMutation,
} = authAPI
