export type PublicPostsType = {
    items: PublicPostsTypeItems[]
    pageSize: number
    totalCount: number
    totalUsers: number
}
export type PublicPostsTypeItemsImages = {
    fileSize: number
    height: number
    uploadId: string
    url: string
    width: number
}
export type PublicPostsTypeItemsOwner = {
    firstName: string
    lastName: string
}
export type PublicPostsTypeItems = {
    avatarOwner: string
    createdAt: string
    description: string
    id: number
    images: PublicPostsTypeItemsImages[]
    location: string
    owner: PublicPostsTypeItemsOwner
    ownerId: number
    updatedAt: string
    userName: string
}
