import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {z} from 'zod'

export const AuthProfileSchema = z.object({
    aboutMe: z.string().nullable(),
    avatars: z.array(userAvatarSchema),
    city: z.string(),
    dateOfBirth: z.string(),
    firstName: z.string(),
    followersCount: z.number(),
    followingCount: z.number(),
    id: z.number(),
    isFollowedBy: z.boolean(),
    isFollowing: z.boolean(),
    lastName: z.string(),
    publicationsCount: z.number(),
    userName: z.string(),
})

export type AuthProfileType = z.infer<typeof AuthProfileSchema>
