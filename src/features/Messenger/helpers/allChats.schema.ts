import {MessageStatusSchema} from '@/features/Messenger/helpers/Message.schema'
import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {z} from 'zod'

export const ChatSchema = z.object({
    avatars: z.array(userAvatarSchema),
    createdAt: z.string(),
    id: z.number(),
    messageText: z.string(),
    messageType: z.string(), //todo ask back for enum
    ownerId: z.number(),
    receiverId: z.number(),
    status: MessageStatusSchema,
    updatedAt: z.string(),
    userName: z.string(),
})

export const AllChatsSchema = z.object({
    items: z.array(ChatSchema),
    pageSize: z.number(),
    totalCount: z.number(),
})
export type AllChatsType = z.infer<typeof AllChatsSchema>
export type ChatType = z.infer<typeof ChatSchema>
