import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {NewPasswordRequestType} from './createNewPassword.types'

export const createNewPasswordAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        createNewPassword: build.mutation<void, NewPasswordRequestType>({
            query: body => ({
                body,
                method: 'POST',
                url: 'auth/new-password',
            }),
        }),
    }),
})

export const {useCreateNewPasswordMutation} = createNewPasswordAPI
