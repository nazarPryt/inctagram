import {z} from 'zod'

const notificationSchema = z
    .object({
        id: z.number().positive(),
        isRead: z.boolean(),
        message: z.string().min(1),
        notifyAt: z.string().min(1),
    })
    .strict()

export const getNotificationsSchema = z
    .object({
        items: z.array(notificationSchema),
        pageSize: z.number(),
        totalCount: z.number(),
    })
    .strict()

export type NotificationType = z.infer<typeof notificationSchema>
export type GetNotificationsType = z.infer<typeof getNotificationsSchema>
