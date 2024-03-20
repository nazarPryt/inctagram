import {rtkQuery} from '@/_app/Api/client/rtkQuery'

export const checkRecoveryCodeAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        checkRecoveryCode: build.mutation<void, {recoveryCode: string}>({
            query: body => ({
                body,
                method: 'POST',
                url: 'auth/check-recovery-code',
            }),
        }),
    }),
})

export const {useCheckRecoveryCodeMutation} = checkRecoveryCodeAPI
