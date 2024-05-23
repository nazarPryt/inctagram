import {ImageSchema} from '@/shared/schemas/Image.schema'
import {z} from 'zod'

const UserPostOwnerSchema = z
    .object({
        firstName: z.string().nullable(),
        lastName: z.string().nullable(),
    })
    .strict()

export const UserPostItemSchema = z
    .object({
        avatarOwner: z.string().optional(),
        createdAt: z.string(),
        description: z.string(),
        id: z.number(),
        images: z.array(ImageSchema),
        likesCount: z.number(),
        location: z.string().nullable(),
        owner: UserPostOwnerSchema,
        ownerId: z.number(),
        updatedAt: z.string(),
        userName: z.string(),
    })
    .strict()

export const UserPostsSchema = z
    .object({
        items: z.array(UserPostItemSchema),
        pageSize: z.number(),
        totalCount: z.number(),
        totalUsers: z.number(),
    })
    .strict()

export type UserPostsType = z.infer<typeof UserPostsSchema>
export type UserPostItemType = z.infer<typeof UserPostItemSchema>
export type UserPostOwnerType = z.infer<typeof UserPostOwnerSchema>
