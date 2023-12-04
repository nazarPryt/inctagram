import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CreatePostSchema} from '../types/createPostSchema'
import {EditorPanelSchema} from '../types/editorPanelSchema'

const editorPanelSlice = createSlice({
    name: 'createPost',
    initialState: {
        onSelectResize: false,
        onZoom: false,
        onLibrary: false,
    } as EditorPanelSchema,
    reducers: {
        setOnSelectResize: (state: EditorPanelSchema, action: PayloadAction<boolean>) => {
            state.onSelectResize = action.payload
            state.onZoom = false
            state.onLibrary = false
        },
        setOnZoom: (state: EditorPanelSchema, action: PayloadAction<boolean>) => {
            state.onSelectResize = false
            state.onZoom = action.payload
            state.onLibrary = false
        },
        setOnLibrary: (state: EditorPanelSchema, action: PayloadAction<boolean>) => {
            state.onSelectResize = false
            state.onZoom = false
            state.onLibrary = action.payload
        },
        setCloseAllPopup: (state: EditorPanelSchema, action: PayloadAction<boolean>) => {
            state.onSelectResize = action.payload
            state.onZoom = action.payload
            state.onLibrary = action.payload
        },
    },
})

export const editorPanelReducer = editorPanelSlice.reducer

export const editorPanelAC = editorPanelSlice.actions
