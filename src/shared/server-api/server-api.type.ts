export type PublicProfileType = {
    aboutMe: string
    avatars: PublicProfileTypeAvatars[]
    id: number
    userName: string
}
export type PublicProfileTypeAvatars = {
    fileSize: number
    height: number
    url: string
    width: number
}
