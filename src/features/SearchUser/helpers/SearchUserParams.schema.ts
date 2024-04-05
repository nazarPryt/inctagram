import {z} from 'zod'

export const searchUserParamsSchema = z.object({
    cursor: z.number().default(0),
    pageNumber: z.number(),
    pageSize: z.number().default(12),
    search: z.string(),
})
export type SearchUserParamsType = z.infer<typeof searchUserParamsSchema>
