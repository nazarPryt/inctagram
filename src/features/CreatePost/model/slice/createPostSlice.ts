import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CreatePostSchema, LibraryPictureType} from '../types/createPostSchema'
import {ImageMetaData} from '../../service/types'

const createPostSlice = createSlice({
    name: 'createPost',
    initialState: {
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
        setPreviewImage: (state, action: PayloadAction<string>) => {
            state.previewImage = action.payload
        },
        setPreviewFilter: (state, action: PayloadAction<string>) => {
            state.previewFilter = action.payload
        },
        setPreviewZoom: (state, action: PayloadAction<string>) => {
            state.previewZoom = action.payload
        },
        setResizeCanvas: (state, action: PayloadAction<{width: number; height: number}>) => {
            state.defaultHeight = action.payload.height
            state.defaultWidth = action.payload.width
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
