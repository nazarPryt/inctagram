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

export const GetChatSchema = z.object({
    items: z.array(MessageSchema),
    pageSize: z.number(),
    totalCount: z.number(),
})

export type MessageType = z.infer<typeof MessageSchema>
export type GetChatType = z.infer<typeof GetChatSchema>
export type MessageStatusType = z.infer<typeof MessageStatusSchema>
