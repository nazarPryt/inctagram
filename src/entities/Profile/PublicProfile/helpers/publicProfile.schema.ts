import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {UserMetaDataSchema} from '@/shared/schemas/UserMetaDataSchema'
import {z} from 'zod'

export const PublicProfileSchema = z
    .object({
        aboutMe: z.string().nullable(),
        avatars: z.array(userAvatarSchema),
        id: z.number(),
        userMetadata: UserMetaDataSchema,
        userName: z.string(),
    })
    .strict()

export type PublicProfileType = z.infer<typeof PublicProfileSchema>
