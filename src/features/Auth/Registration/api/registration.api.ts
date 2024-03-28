import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {RegistrationRequestType} from '../helpers/registration.schema'

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
