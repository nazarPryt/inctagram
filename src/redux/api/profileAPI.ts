import {api} from 'redux/api/api'

export const profileAPI = api.injectEndpoints({
    endpoints: build => ({
        userAvatar: build.mutation<UserAvatar, FormData | File>({
            query: body => ({
                url: `users/profile/avatar`,
                method: 'POST',
                body,
            }),
        }),
    }),
})

export type UserAvatar = {
    avatars: UserAvatarAvatars[]
}
export type UserAvatarAvatars = {
    url: string
    width: number
    height: number
    fileSize: number
}
export const {useUserAvatarMutation} = profileAPI
