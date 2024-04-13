import {PayloadAction, createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     pageSize: 12,
//     totalCount: 100,
// }

export const messengerSlice = createSlice({
    initialState: {},
    name: 'messenger',
    reducers: {
        GetMessagesByUserAC: (state, action: PayloadAction<{dialoguePartnerId: number}>) => {},
    },
})

export const messengerReducer = messengerSlice.reducer
export const {GetMessagesByUserAC} = messengerSlice.actions
