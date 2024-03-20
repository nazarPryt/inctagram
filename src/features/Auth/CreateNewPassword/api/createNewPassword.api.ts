import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {NewPasswordArgType} from './createNewPassword.types'

export const createNewPasswordAPI = rtkQuery.injectEndpoints({
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
