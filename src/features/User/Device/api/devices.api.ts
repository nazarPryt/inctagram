import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {AllSessionsSchema, AllSessionsType} from './devices.types'

export const devicesAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAllSessions: build.query<AllSessionsType, void>({
            providesTags: ['Sessions'],
            query: () => ({
                url: `sessions`,
            }),
            transformResponse: response => {
                console.log(response)

                return AllSessionsSchema.parseAsync(response)
            },
        }),

        terminateAllSessions: build.mutation<void, void>({
            invalidatesTags: ['Sessions'],
            query: () => ({
                method: 'DELETE',
                url: `sessions/terminate-all`,
            }),
        }),

        terminateSession: build.mutation({
            invalidatesTags: ['Sessions'],
            query: deviceId => ({
                method: 'DELETE',
                url: `sessions/${deviceId}`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetAllSessionsQuery, useTerminateAllSessionsMutation, useTerminateSessionMutation} = devicesAPI
