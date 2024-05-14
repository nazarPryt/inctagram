import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {z} from 'zod'

export const FollowerSchema = z.object({
    avatars: z.array(userAvatarSchema),
    createdAt: z.string(),
    id: z.number(),
    isFollowedBy: z.boolean(),
    isFollowing: z.boolean(),
    userId: z.number(),
    userName: z.string(),
})

export const GetFollowersSchema = z.object({
    items: z.array(FollowerSchema),
    nextCursor: z.number().nullable(),
    page: z.number(),
    pageSize: z.number(),
    pagesCount: z.number(),
    prevCursor: z.number(),
    totalCount: z.number(),
})

export type FollowerSchemaType = z.infer<typeof FollowerSchema>
export type GetFollowersType = z.infer<typeof GetFollowersSchema>
