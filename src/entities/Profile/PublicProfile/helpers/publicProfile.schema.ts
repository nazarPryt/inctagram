import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {z} from 'zod'

export const PublicProfileSchema = z.object({
    aboutMe: z.string().nullable(),
    avatars: z.array(userAvatarSchema),
    id: z.number(),
    userName: z.string(),
})

export type PublicProfileType = z.infer<typeof PublicProfileSchema>
