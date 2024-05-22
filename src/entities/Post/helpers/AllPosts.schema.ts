import {ImageSchema} from '@/shared/schemas/Image.schema'
import {z} from 'zod'

const AllPostsOwnerSchema = z
    .object({
        firstName: z.string().nullable(),
        lastName: z.string().nullable(),
    })
    .strict()

export const AllPostsItemSchema = z
    .object({
        avatarOwner: z.string().optional(),
        createdAt: z.string(),
        description: z.string(),
        id: z.number(),
        images: z.array(ImageSchema),
        likesCount: z.number(),
        location: z.string().nullable(),
        owner: AllPostsOwnerSchema,
        ownerId: z.number(),
        updatedAt: z.string(),
        userName: z.string(),
    })
    .strict()

export const AllPostsSchema = z
    .object({
        items: z.array(AllPostsItemSchema),
        pageSize: z.number(),
        totalCount: z.number(),
        totalUsers: z.number(),
    })
    .strict()

export type AllPostsType = z.infer<typeof AllPostsSchema>
export type AllPostsItemType = z.infer<typeof AllPostsItemSchema>
export type AllPostsItemOwnerType = z.infer<typeof AllPostsOwnerSchema>
