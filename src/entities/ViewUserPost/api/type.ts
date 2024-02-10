export type PostByIdType = {
    avatarOwner: string
    createdAt: string
    description: string
    id: number
    images: PostByIdTypeImages[]
    location: string
    owner: PostByIdTypeOwner
    ownerId: number
    updatedAt: string
    userName: string
}
export type PostByIdTypeImages = {
    fileSize: number
    height: number
    uploadId: string
    url: string
    width: number
}
export type PostByIdTypeOwner = {
    firstName: string
    lastName: string
}
