import {z} from 'zod'

export const searchUserParamsSchema = z.object({
    cursor: z.number().default(0),
    pageNumber: z.number().nullable(),
    pageSize: z.number().default(12).nullable(),
    search: z.string().nullable(),
})
export type SearchUserParamsType = z.infer<typeof searchUserParamsSchema>
