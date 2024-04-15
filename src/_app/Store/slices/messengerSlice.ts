import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
    selectedChatId: null as null | number,
}

export const messengerSlice = createSlice({
    initialState,
    name: 'messenger',
    reducers: {
        SetSelectedChatIdAC: (state, action: PayloadAction<number>) => {
            state.selectedChatId = action.payload
        },
    },
})

export const messengerReducer = messengerSlice.reducer
export const {SetSelectedChatIdAC} = messengerSlice.actions
