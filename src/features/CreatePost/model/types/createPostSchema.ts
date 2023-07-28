import {ImageMetaData} from '../../service/types'

export type CreatePostSchema = {
    previewImage: string
    previewFilter: string
    previewZoom: string
    defaultWidth: number
    defaultHeight: number
    step: StepsType
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

export type StepsType = 'Add Photo' | 'Cropping' | 'Filters' | 'Describe' | 'SENDING'
