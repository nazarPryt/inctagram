import {ImageMetaData} from '../../api/createPost.types'

export type CreatePostSchema = {
    currentImageId: string
    defaultHeight: number
    defaultWidth: number
    describeText: string
    libraryPictures: LibraryPictureType[]
    previewFilter: string
    previewImage: string
    previewZoom: string
    step: string
    uploadId: ImageMetaData[]
}

export type LibraryPictureType = {
    filter: string
    height: number
    id: string
    img: string
    readyToSend: File | null
    width: number
    zoom: '1' | string
}
