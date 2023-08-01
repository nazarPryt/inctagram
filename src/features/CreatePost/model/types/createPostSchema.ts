import {ImageMetaData} from '../../service/types'

export type CreatePostSchema = {
    previewImage: string
    previewFilter: string
    previewZoom: string
    defaultWidth: number
    defaultHeight: number
    step: string
    libraryPictures: LibraryPictureType[]
    uploadId: ImageMetaData[]
    describeText: string
}

export type LibraryPictureType = {
    id: string
    img: string
    zoom: string | '1'
    filter: string
    readyToSend: File | null
}
