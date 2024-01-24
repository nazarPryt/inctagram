import {api} from 'redux/api/api'
import {ResponseType} from 'redux/types/authTypes'

import {UpdateUserRequest} from './updateUser.type'

export const updateUserAPI = api.injectEndpoints({
    endpoints: build => ({
        updateUser: build.mutation<ResponseType, UpdateUserRequest>({
            invalidatesTags: ['User'],
            query: body => ({
                body,
                method: 'PUT',
                url: `/users/profile`,
            }),
        }),
    }),
})
export const {useUpdateUserMutation} = updateUserAPI
