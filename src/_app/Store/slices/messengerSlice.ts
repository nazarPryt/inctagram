import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
    cursor: null as null | number,
    dialoguePartnerId: null as null | number,
    pageSize: null as null | number,
    searchName: null as null | string,
}

export const messengerSlice = createSlice({
    initialState,
    name: 'messengerParams',
    reducers: {
        SetDialoguePartnerIdAC: (state, action: PayloadAction<number>) => {
            state.dialoguePartnerId = action.payload
        },
    },
})

export const messengerReducer = messengerSlice.reducer
export const {SetDialoguePartnerIdAC} = messengerSlice.actions
