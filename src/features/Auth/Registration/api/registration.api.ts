import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {RegistrationRequestType} from './registration.types'

export const registrationAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        registration: build.mutation<void, RegistrationRequestType>({
            query: body => ({
                body,
                method: 'POST',
                url: `auth/registration`,
            }),
        }),
    }),
})

export const {useRegistrationMutation} = registrationAPI
