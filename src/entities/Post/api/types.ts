export type PostsType = {
    totalCount: number
    pagesCount: number
    page: number
    pageSize: number
    items: PostCardType[]
}
export type PostCardImageType = {
    url: string
    width: number
    height: number
    fileSize: number
    uploadId: string
}
export type PostCardType = {
    id: number
    description: string
    location: string
    images: PostCardImageType[]
    createdAt: string
    updatedAt: string
}
