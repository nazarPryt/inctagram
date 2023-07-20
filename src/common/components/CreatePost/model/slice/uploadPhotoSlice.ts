import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LibraryPictureType} from '../types/uploadPhotoSchema'

const uploadPhotoSlice = createSlice({
    name: 'uploadPhoto',
    initialState: {
        id: '',
        img: '',
        zoom: '1',
        filter: '',
    } as LibraryPictureType,
    reducers: {
        setImage: (state, action: PayloadAction<LibraryPictureType>) => {
            state.img = action.payload.img
            state.id = action.payload.id
            state.filter = action.payload.filter
            state.zoom = action.payload.zoom
            state.readyToSend = action.payload.readyToSend
            // state = {
            //     id: action.payload.id,
            //     img: action.payload.img,
            //     zoom: action.payload.zoom,
            //     filter: action.payload.filter,
            // }
        },
    },
})

export const {reducer: uploadPhotoReducer} = uploadPhotoSlice
export const {setImage} = uploadPhotoSlice.actions
