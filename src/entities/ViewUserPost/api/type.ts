export type PostByIdType = {
    id: number
    description: string
    location?: any
    images: PostByIdImages[]
    createdAt: string
    updatedAt: string
}
export type PostByIdImages = {
    url: string
    width: number
    height: number
    fileSize: number
    uploadId: string
}
