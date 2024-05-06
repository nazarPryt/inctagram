import {rtkQuery} from '@/_app/Api/client/RTKQuery'

export const updateTokensAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        updateTokens: build.mutation<{accessToken: string}, void>({
            query: body => ({
                body,
                method: 'POST',
                url: 'auth/update-tokens',
            }),
        }),
    }),
})

export const {useUpdateTokensMutation} = updateTokensAPI
