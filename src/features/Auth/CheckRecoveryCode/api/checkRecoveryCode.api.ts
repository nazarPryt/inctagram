import {api} from '@/redux/api/api'

export const checkRecoveryCodeAPI = api.injectEndpoints({
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
