import {api} from 'redux/api/api'
import {ResponseType} from 'redux/types/authTypes'

export type UpdateUserRequest = {
    userName: string
    firstName: string
    lastName: string
    city: string
    dateOfBirth: string
    aboutMe: string
}

export const updateUserAPI = api.injectEndpoints({
    endpoints: build => ({
        updateUser: build.mutation<ResponseType, UpdateUserRequest>({
            query: body => ({
                url: `/users/profile`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['User'],
        }),
    }),
})
export const {useUpdateUserMutation} = updateUserAPI
