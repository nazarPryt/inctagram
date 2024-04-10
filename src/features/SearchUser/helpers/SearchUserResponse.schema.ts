import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {z} from 'zod'

export const SearchUserItemSchema = z.object({
    avatars: z.array(userAvatarSchema),
    createdAt: z.string(),
    firstName: z.string().nullable(),
    id: z.number(),
    lastName: z.string().nullable(),
    userName: z.string(),
})

export const SearchUserResponseSchema = z.object({
    items: z.array(SearchUserItemSchema),
    nextCursor: z.number().nullable(),
    page: z.number(),
    pageSize: z.number(),
    pagesCount: z.number(),
    prevCursor: z.number(),
    totalCount: z.number(),
})

export type SearchUserItemType = z.infer<typeof SearchUserItemSchema>
export type SearchUserResponseType = z.infer<typeof SearchUserResponseSchema>
