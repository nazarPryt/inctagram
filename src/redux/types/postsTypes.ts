export type UploadedImage = {
    url: string
    width: number
    height: number
    fileSize: number
    uploadId: string
}

export type UploadedImageResponse = {
    images: UploadedImage[]
}

export type ImageMetaData = {
    uploadId: string
}

export type UploadPost = {
    description: string
    childrenMetadata: ImageMetaData[]
}

export type CreatePostResponse = {
    id: number
    description: string
    location: string
    images: UploadedImageResponse[]
    createdAt: string
    updatedAt: string
}
