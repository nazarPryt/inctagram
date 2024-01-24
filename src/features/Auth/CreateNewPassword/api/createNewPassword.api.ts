import {api} from 'redux/api/api'
import {NewPasswordArgType} from 'redux/types/authTypes'

export const createNewPasswordAPI = api.injectEndpoints({
    endpoints: build => ({
        createNewPassword: build.mutation<void, NewPasswordArgType>({
            query: body => ({
                body,
                method: 'POST',
                url: 'auth/new-password',
            }),
        }),
    }),
})

export const {useCreateNewPasswordMutation} = createNewPasswordAPI
