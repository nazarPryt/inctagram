import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {UpdateUserRequest} from './updateUser.type'

export const updateUserAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        updateUser: build.mutation<void, UpdateUserRequest>({
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
