import {MeDataType} from '@/features/Auth/Me/api/me.types'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState: MeDataType = {
    email: '',
    isBlocked: false,
    userId: 0,
    userName: '',
}

export const userSlice = createSlice({
    initialState,
    name: 'userAuth',
    reducers: {
        SetUser: (state, action: PayloadAction<MeDataType>) => {
            state = {...action.payload}

            return state
        },
    },
})

export const userReducer = userSlice.reducer
export const {SetUser} = userSlice.actions
