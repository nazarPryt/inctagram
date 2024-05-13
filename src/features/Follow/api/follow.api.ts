import {rtkQuery} from '@/_app/Api/client/RTKQuery'

export const followAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        follow: build.mutation<void, {selectedUserId: string}>({
            query: body => ({
                body,
                method: 'POST',
                url: 'users/following',
            }),
        }),
    }),
})

export const {useFollowMutation} = followAPI
