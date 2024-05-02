import {ChatParamsTypes} from '@/entities/Messenger/Chat/api/chat.types'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState: ChatParamsTypes = {
    cursor: null,
    dialoguePartnerId: null,
    pageSize: 6,
    searchName: null,
}

export const messengerSlice = createSlice({
    initialState,
    name: 'messengerParams',
    reducers: {
        SetDialoguePartnerIdAC: (state, action: PayloadAction<number>) => {
            state.dialoguePartnerId = action.payload
        },
        SetMessageCursorAC: (state, action: PayloadAction<null | number>) => {
            state.cursor = action.payload
        },
    },
})

export const messengerReducer = messengerSlice.reducer
export const {SetDialoguePartnerIdAC, SetMessageCursorAC} = messengerSlice.actions
