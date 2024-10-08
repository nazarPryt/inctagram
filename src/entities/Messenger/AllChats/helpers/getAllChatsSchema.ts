import {MessageStatusSchema} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {z} from 'zod'

export const GetAllChatsItemSchema = z
    .object({
        avatars: z.array(userAvatarSchema).default([]),
        createdAt: z.string(),
        id: z.number(),
        messageText: z.string(),
        messageType: z.string(), //todo ask back for enum
        ownerId: z.number(),
        receiverId: z.number(),
        status: MessageStatusSchema,
        updatedAt: z.string(),
        userName: z.string().optional(),
    })
    .strict()

export const GetAllChatsSchema = z
    .object({
        items: z.array(GetAllChatsItemSchema),
        pageSize: z.number(),
        totalCount: z.number(),
    })
    .strict()
export type GetAllChatsType = z.infer<typeof GetAllChatsSchema>
export type GetAllChatsItemType = z.infer<typeof GetAllChatsItemSchema>
