import {z} from 'zod'

export const userAvatarSchema = z.object({
    fileSize: z.number(),
    height: z.number(),
    url: z.string().url(),
    width: z.number(),
})
export type userAvatarType = z.infer<typeof userAvatarSchema>
