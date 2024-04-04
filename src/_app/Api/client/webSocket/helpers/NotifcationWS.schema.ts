import {z} from 'zod'

export const notificationSocketResponseSchema = z
    .object({
        clientId: z.string().min(1),
        eventType: z.number().positive(),
        id: z.number().positive(),
        isRead: z.boolean(),
        message: z.string().min(1),
        notifyAt: z.string().min(1),
    })
    .strict()

export type NotificationSocketResponseType = z.infer<typeof notificationSocketResponseSchema>
