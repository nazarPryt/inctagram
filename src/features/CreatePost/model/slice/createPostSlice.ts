import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CreatePostSchema, LibraryPictureType} from '../types/createPostSchema'
import {ImageMetaData} from '../../service/types'

const createPostSlice = createSlice({
    name: 'createPost',
    initialState: {
        currentImageId: '',
        previewImage: '',
        previewFilter: '',
        previewZoom: '1',
        defaultWidth: 485,
        defaultHeight: 465,
        step: 'Add Photo',
        libraryPictures: [],
        uploadId: [],
        describeText: '',
    } as CreatePostSchema,
    reducers: {
        setCurrentImageId: (state: CreatePostSchema, action: PayloadAction<string>) => {
            console.log('currentImageId', action.payload)
            state.currentImageId = action.payload
        },
        setPreviewImage: (state, action: PayloadAction<string>) => {
            const currPicture = state.libraryPictures.find(el => el.img === action.payload)
            state.previewImage = action.payload
            if (currPicture) {
                state.defaultWidth = currPicture.width
                state.defaultHeight = currPicture.height
            }
        },
        setPreviewFilter: (state, action: PayloadAction<string>) => {
            state.previewFilter = action.payload
        },
        setPreviewZoom: (state, action: PayloadAction<string>) => {
            state.previewZoom = action.payload
        },
        setLibraryPicturesZoom: (state, action: PayloadAction<string>) => {
            const index = state.libraryPictures.findIndex(item => item.id === state.currentImageId)
            if (index !== -1) state.libraryPictures[index].zoom = action.payload
        },
        setResizeCanvas: (state, action: PayloadAction<{width: number; height: number}>) => {
            const currImage = state.libraryPictures.find(el => el.img === state.previewImage)
            state.defaultHeight = action.payload.height
            state.defaultWidth = action.payload.width
            if (currImage) {
                currImage.height = action.payload.height
                currImage.width = action.payload.width
            }
        },
        setStep: (state, action: PayloadAction<string>) => {
            state.step = action.payload
        },
        setLibraryPictures: (state, action: PayloadAction<LibraryPictureType>) => {
            state.libraryPictures.push(action.payload)
        },
        setLibraryFromDraft: (state, action: PayloadAction<LibraryPictureType[]>) => {
            state.libraryPictures = action.payload
            state.previewImage = action.payload[0].img
        },
        setUploadId: (state, action: PayloadAction<ImageMetaData>) => {
            state.uploadId.push(action.payload)
        },
        setDescribeText: (state, action: PayloadAction<string>) => {
            state.describeText = action.payload
        },
        setPreviewPicture: (state, action: PayloadAction<LibraryPictureType>) => {
            state.previewImage = action.payload.img
            state.previewFilter = action.payload.filter
            state.previewZoom = action.payload.zoom
        },
        uploadFilterImage: (state, action: PayloadAction<{img: string; filter: string}>) => {
            const currentIndex = state.libraryPictures.findIndex(el => el.img === action.payload.img)

            state.libraryPictures[currentIndex].filter = action.payload.filter
        },
        uploadFile: (state, action: PayloadAction<{img: string; file: File}>) => {
            const currentIndex = state.libraryPictures.findIndex(el => el.img === action.payload.img)

            state.libraryPictures[currentIndex].readyToSend = action.payload.file
        },
        deleteImageFromLibrary: (state, action: PayloadAction<LibraryPictureType>) => {
            const currentIndex = state.libraryPictures.findIndex(el => el.img === action.payload.img)

            if (currentIndex !== -1) {
                state.libraryPictures.splice(currentIndex, 1)
            }
        },
        clearLibraryImages: (state, action) => {
            state.libraryPictures = action.payload
        },
        clearPreviewImage: (state, action) => {
            state.previewImage = action.payload
            state.previewFilter = ''
            state.previewZoom = '1'
        },
        clearAllState: state => {
            state.previewImage = ''
            state.previewFilter = ''
            state.previewZoom = '1'
            state.defaultWidth = 485
            state.defaultHeight = 465
            state.step = 'Add Photo'
            state.libraryPictures = []
            state.uploadId = []
            state.describeText = ''
        },
    },
})

export const createPostReducer = createPostSlice.reducer

export const createPostAC = createPostSlice.actions
