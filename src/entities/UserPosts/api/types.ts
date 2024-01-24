export type PostsType = {
    items: PostCardType[]
    page: number
    pageSize: number
    pagesCount: number
    totalCount: number
}
export type PostCardImageType = {
    fileSize: number
    height: number
    uploadId: string
    url: string
    width: number
}
export type PostCardType = {
    createdAt: string
    description: string
    id: number
    images: PostCardImageType[]
    location: string
    updatedAt: string
}
