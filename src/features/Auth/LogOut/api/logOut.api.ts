import {api} from 'redux/api/api'

export const logOutAPI = api.injectEndpoints({
    endpoints: build => ({
        logOut: build.mutation<void, void>({
            query: () => ({
                url: `auth/logout`,
                method: 'POST',
            }),
        }),
    }),
})
export const {useLogOutMutation} = logOutAPI
