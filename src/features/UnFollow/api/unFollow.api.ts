import {rtkQuery} from '@/_app/Api/client/RTKQuery'

export const unFollowApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        unFollow: build.mutation<void, {userId: string}>({
            query: userId => ({
                method: 'DELETE',
                url: `users/following/${userId}`,
            }),
        }),
    }),
})

export const {useUnFollowMutation} = unFollowApi
