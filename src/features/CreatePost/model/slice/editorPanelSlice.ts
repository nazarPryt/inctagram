import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import {CreatePostSchema} from '../types/createPostSchema'
import {EditorPanelSchema} from '../types/editorPanelSchema'

const editorPanelSlice = createSlice({
    initialState: {
        onLibrary: false,
        onSelectResize: false,
        onZoom: false,
    } as EditorPanelSchema,
    name: 'createPost',
    reducers: {
        setCloseAllPopup: (state: EditorPanelSchema, action: PayloadAction<boolean>) => {
            state.onSelectResize = action.payload
            state.onZoom = action.payload
            state.onLibrary = action.payload
        },
        setOnLibrary: (state: EditorPanelSchema, action: PayloadAction<boolean>) => {
            state.onSelectResize = false
            state.onZoom = false
            state.onLibrary = action.payload
        },
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
    },
})

export const editorPanelReducer = editorPanelSlice.reducer

export const editorPanelAC = editorPanelSlice.actions
