import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {z} from 'zod'

export const FollowingSchema = z.object({
    avatars: z.array(userAvatarSchema),
    createdAt: z.string(),
    id: z.number(),
    isFollowedBy: z.boolean(),
    isFollowing: z.boolean(),
    userId: z.number(),
    userName: z.string(),
})

export const GetFollowingSchema = z.object({
    items: z.array(FollowingSchema),
    nextCursor: z.number().nullable(),
    page: z.number(),
    pageSize: z.number(),
    pagesCount: z.number(),
    prevCursor: z.number(),
    totalCount: z.number(),
})

export type FollowingSchemaType = z.infer<typeof FollowingSchema>
export type GetFollowingType = z.infer<typeof GetFollowingSchema>
