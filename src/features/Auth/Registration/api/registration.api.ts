import {api} from 'redux/api/api'
import {ResponseType} from 'redux/types/authTypes'
import {RegistrationRequestType} from 'features/Auth/Registration/api/registration.types'

export const registrationAPI = api.injectEndpoints({
    endpoints: build => ({
        registration: build.mutation<ResponseType, RegistrationRequestType>({
            query: body => ({
                url: `auth/registration`,
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {useRegistrationMutation} = registrationAPI
