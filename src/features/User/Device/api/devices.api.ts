import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {DeviceType} from './devices.types'

export const devicesAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        getAllSessions: build.query<DeviceType[], void>({
            providesTags: ['Sessions'],
            query: () => ({
                url: `sessions`,
            }),
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
