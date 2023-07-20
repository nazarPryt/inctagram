export type SignUpRequestType = {
    userName: string
    email: string
    password: string
}

export type ResponseType = {
    statusCode: number
    messages: [
        {
            message: string
            field: string
        }
    ]
    error: string
}

export type UserResponseType = {
    email: string
    userId: number
    userName: string
}

export interface UserProfile {
    id: number
    userName: string
    firstName: string
    lastName: string
    city: string
    dateOfBirth: Date
    aboutMe: string
    avatars: UserProfileAvatars[]
}

export interface UserProfileAvatars {
    url: string
    width: number
    height: number
    fileSize: number
}

export type ForgotPasswordArgType = {
    email: string
    recaptcha: string
}

export type NewPasswordArgType = {
    newPassword: string
    recoveryCode: string
}

export type UserType = {
    email: string | null
    userId: number | null
    userName: string | undefined
}
