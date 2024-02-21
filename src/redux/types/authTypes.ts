export type ResponseType = {
    error: string
    messages: [
        {
            field: string
            message: string
        },
    ]
    statusCode: number
}

export type UserResponseType = {
    email: string
    userId: number
    userName: string
}

export interface UserProfile {
    aboutMe: string
    avatars: UserProfileAvatars[]
    city: string
    dateOfBirth: Date
    firstName: string
    id: number
    lastName: string
    userName: string
}

export interface UserProfileAvatars {
    fileSize: number
    height: number
    url: string
    width: number
}

export type ForgotPasswordArgType = {
    email: string
    recaptcha: string
}

export type UserType = {
    email: string
    userId: number
    userName: string
}
