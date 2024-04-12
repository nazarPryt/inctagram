import {z} from 'zod'

export const MessageStatusSchema = z.union([z.literal('SENT'), z.literal('RECEIVED'), z.literal('READ')])

export const MessageSchema = z.object({
    createdAt: z.string(),
    id: z.number(),
    messageText: z.string(),
    messageType: z.string(),
    ownerId: z.number(),
    receiverId: z.number(),
    status: MessageStatusSchema,
    updatedAt: z.string(),
})
export type MessageType = z.infer<typeof MessageSchema>
export type MessageStatusType = z.infer<typeof MessageStatusSchema>
