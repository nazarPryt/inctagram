export type UploadedImage = {
    fileSize: number
    height: number
    uploadId: string
    url: string
    width: number
}

export type UploadedImageResponse = {
    images: UploadedImage[]
}

export type ImageMetaData = {
    uploadId: string
}

export type CreatePostResponse = {
    createdAt: string
    description: string
    id: number
    images: UploadedImageResponse[]
    location: string
    updatedAt: string
}

export type UploadPost = {
    childrenMetadata: ImageMetaData[]
    description: string
}
