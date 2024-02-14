import {UserResponseType, UserType} from '@/redux/types/authTypes'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState: UserType = {
    email: '',
    userId: 0,
    userName: '',
}

export const userSlice = createSlice({
    initialState,
    name: 'userAuth',
    reducers: {
        SetUser: (state, action: PayloadAction<UserResponseType>) => {
            state = {...action.payload}

            return state
        },
    },
})

export const userReducer = userSlice.reducer
export const {SetUser} = userSlice.actions
