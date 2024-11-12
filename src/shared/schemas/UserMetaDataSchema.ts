import {z} from 'zod'

export const UserMetaDataSchema = z
    .object({
        followers: z.number(),
        following: z.number(),
        publications: z.number(),
    })
    .strict()

export type UserMetaDataType = z.infer<typeof UserMetaDataSchema>
