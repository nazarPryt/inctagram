import {DeviceType} from '@/features/User/Device/api/devices.types'
import {api} from '@/redux/api/api'

export const devicesAPI = api.injectEndpoints({
    endpoints: build => ({
        deleteSession: build.mutation({
            query: deviceId => ({
                method: 'DELETE',
                url: `sessions/${deviceId}`,
            }),
        }),

        getAllSessions: build.query<DeviceType[], void>({
            query: () => ({
                url: `sessions`,
            }),
        }),

        terminateAllSessions: build.mutation<void, void>({
            query: () => ({
                method: 'DELETE',
                url: `sessions/terminate-all`,
            }),
        }),
    }),
})

export const {useDeleteSessionMutation, useGetAllSessionsQuery, useTerminateAllSessionsMutation} = devicesAPI
