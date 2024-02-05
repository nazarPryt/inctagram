import {api} from '@/redux/api/api'

import {DeviceType} from './devices.types'

export const devicesAPI = api.injectEndpoints({
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
