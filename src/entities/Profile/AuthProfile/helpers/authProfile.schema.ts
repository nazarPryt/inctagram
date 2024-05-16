import {userAvatarSchema} from '@/shared/schemas/UserAvatar.schema'
import {z} from 'zod'

export const AuthProfileSchema = z.object({
    aboutMe: z.string().nullable(),
    avatars: z.array(userAvatarSchema),
    city: z.string().nullable(),
    dateOfBirth: z.string().nullable(),
    firstName: z.string().nullable(),
    followersCount: z.number(),
    followingCount: z.number(),
    id: z.number(),
    isFollowedBy: z.boolean(),
    isFollowing: z.boolean(),
    lastName: z.string().nullable(),
    publicationsCount: z.number(),
    userName: z.string(),
})

export type AuthProfileType = z.infer<typeof AuthProfileSchema>
