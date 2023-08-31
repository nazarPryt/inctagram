import { api } from 'redux/api/api'

export const checkRecoveryCodeAPI = api.injectEndpoints({
  endpoints: build => ({
    checkRecoveryCode: build.mutation<void, { recoveryCode: string }>({
      query: body => ({
        url: 'auth/check-recovery-code',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useCheckRecoveryCodeMutation } = checkRecoveryCodeAPI
