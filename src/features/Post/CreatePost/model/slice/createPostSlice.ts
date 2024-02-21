import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import {ImageMetaData} from '../../api/types'
import {CreatePostSchema, LibraryPictureType} from '../types/createPostSchema'

const createPostSlice = createSlice({
    initialState: {
        currentImageId: '',
        defaultHeight: 465,
        defaultWidth: 485,
        describeText: '',
        libraryPictures: [],
        previewFilter: '',
        previewImage: '',
        previewZoom: '1',
        step: 'Add Photo',
        uploadId: [],
    } as CreatePostSchema,
    name: 'createPost',
    reducers: {
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
        clearLibraryImages: (state, action) => {
            state.libraryPictures = action.payload
        },
        clearPreviewImage: (state, action) => {
            state.previewImage = action.payload
            state.previewFilter = ''
            state.previewZoom = '1'
        },
        deleteImageFromLibrary: (state, action: PayloadAction<LibraryPictureType>) => {
            const currentIndex = state.libraryPictures.findIndex(el => el.img === action.payload.img)

            if (currentIndex !== -1) {
                state.libraryPictures.splice(currentIndex, 1)
            }
        },
        setCurrentImageId: (state: CreatePostSchema, action: PayloadAction<string>) => {
            console.log('currentImageId', action.payload)
            state.currentImageId = action.payload
        },
        setDescribeText: (state, action: PayloadAction<string>) => {
            state.describeText = action.payload
        },
        setLibraryFromDraft: (state, action: PayloadAction<LibraryPictureType[]>) => {
            state.libraryPictures = action.payload

            state.previewImage = action.payload[action.payload.length - 1].img
        },
        setLibraryPictures: (state, action: PayloadAction<LibraryPictureType>) => {
            state.libraryPictures.push(action.payload)
        },
        setLibraryPicturesZoom: (state, action: PayloadAction<string>) => {
            const index = state.libraryPictures.findIndex(item => item.id === state.currentImageId)

            if (index !== -1) {
                state.libraryPictures[index].zoom = action.payload
            }
        },
        setPreviewFilter: (state, action: PayloadAction<string>) => {
            state.previewFilter = action.payload
        },
        setPreviewImage: (state, action: PayloadAction<string>) => {
            const currPicture = state.libraryPictures.find(el => el.img === action.payload)

            state.previewImage = action.payload
            if (currPicture) {
                state.defaultWidth = currPicture.width
                state.defaultHeight = currPicture.height
            }
        },
        setPreviewPicture: (state, action: PayloadAction<LibraryPictureType>) => {
            state.previewImage = action.payload.img
            state.previewFilter = action.payload.filter
            state.previewZoom = action.payload.zoom
        },
        setPreviewZoom: (state, action: PayloadAction<string>) => {
            state.previewZoom = action.payload
        },
        setResizeCanvas: (state, action: PayloadAction<{height: number; width: number}>) => {
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
        setUploadId: (state, action: PayloadAction<ImageMetaData>) => {
            state.uploadId.push(action.payload)
        },
        uploadFile: (state, action: PayloadAction<{file: File; img: string}>) => {
            const currentIndex = state.libraryPictures.findIndex(el => el.img === action.payload.img)

            state.libraryPictures[currentIndex].readyToSend = action.payload.file
        },
        uploadFilterImage: (state, action: PayloadAction<{filter: string; img: string}>) => {
            const currentIndex = state.libraryPictures.findIndex(el => el.img === action.payload.img)

            state.libraryPictures[currentIndex].filter = action.payload.filter
        },
    },
})

export const createPostReducer = createPostSlice.reducer

export const createPostAC = createPostSlice.actions
