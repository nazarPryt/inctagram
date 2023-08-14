import {api} from 'redux/api/api'
import {NewPasswordArgType} from 'redux/types/authTypes'

export const createNewPasswordAPI = api.injectEndpoints({
    endpoints: build => ({
        createNewPassword: build.mutation<void, NewPasswordArgType>({
            query: body => ({
                url: 'auth/new-password',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {useCreateNewPasswordMutation} = createNewPasswordAPI
