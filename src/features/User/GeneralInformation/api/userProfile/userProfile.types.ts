export type UserProfileType = {
    aboutMe: string
    avatars: UserProfileTypeAvatars[]
    city: string
    createdAt: string
    dateOfBirth: string
    firstName: string
    id: number
    lastName: string
    userName: string
}

export type UserProfileTypeAvatars = {
    fileSize: number
    height: number
    url: string
    width: number
}
