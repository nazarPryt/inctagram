import {z} from 'zod'

export const DeviceItemSchema = z
    .object({
        browserName: z.string(),
        browserVersion: z.string(),
        deviceId: z.number(),
        ip: z.string(),
        lastActive: z.string(),
        osName: z.string(),
        osVersion: z.string(),
    })
    .strict()

export const AllSessionsSchema = z.object({current: DeviceItemSchema, others: z.array(DeviceItemSchema)}).strict()

export type DeviceItemType = z.infer<typeof DeviceItemSchema>
export type AllSessionsType = z.infer<typeof AllSessionsSchema>
