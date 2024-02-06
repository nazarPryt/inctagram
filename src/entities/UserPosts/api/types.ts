export type PostsType = {
    items: PostsTypeItems[]
    pageSize: number
    totalCount: number
    totalUsers: number
}
export type PostsTypeItemsImages = {
    fileSize: number
    height: number
    uploadId: string
    url: string
    width: number
}
export type PostsTypeItemsOwner = {
    firstName: string
    lastName: string
}
export type PostsTypeItems = {
    avatarOwner: string
    createdAt: string
    description: string
    id: number
    images: PostsTypeItemsImages[]
    location?: any
    owner: PostsTypeItemsOwner
    ownerId: number
    updatedAt: string
    userName: string
}
