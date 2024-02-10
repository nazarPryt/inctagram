export type ParamsType = {pageSize?: number; sortBy?: string; sortDirection?: 'asc' | 'desc'}

export type AllPostsType = {
    items: AllPostsTypeItems[]
    pageSize: number
    totalCount: number
    totalUsers: number
}
export type AllPostsTypeItemsImages = {
    fileSize: number
    height: number
    uploadId: string
    url: string
    width: number
}
export type AllPostsTypeItemsOwner = {
    firstName: string
    lastName: string
}
export type AllPostsTypeItems = {
    avatarOwner: string
    createdAt: string
    description: string
    id: number
    images: AllPostsTypeItemsImages[]
    location?: any
    owner: AllPostsTypeItemsOwner
    ownerId: number
    updatedAt: string
    userName: string
}
