import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
    followUnFollow: {
        userName: null as null | string, //Get profile details by userName
    },
}

export const paramsSlice = createSlice({
    initialState,
    name: 'params',
    reducers: {
        SetFollowUnFollowUserNameAC: (state, action: PayloadAction<string>) => {
            state.followUnFollow.userName = action.payload
        },
    },
})

export const paramsReducer = paramsSlice.reducer
export const {SetFollowUnFollowUserNameAC} = paramsSlice.actions
