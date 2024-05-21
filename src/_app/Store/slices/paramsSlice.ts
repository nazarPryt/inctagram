import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export type AllPostsParamsType = {
    endCursorPostId: null | number
    pageSize: number
}

const initialState = {
    allPosts: {
        // Get all posts (Home page)
        endCursorPostId: null,
        pageSize: 2,
    } as AllPostsParamsType,
    followUnFollow: {
        //Get profile details by userName
        userName: null as null | string,
    },
}

export const paramsSlice = createSlice({
    initialState,
    name: 'params',
    reducers: {
        SetAllPostsParamsAC: (state, action: PayloadAction<AllPostsParamsType>) => {
            state.allPosts = {...state.allPosts, ...action.payload}
        },
        SetFollowUnFollowUserNameAC: (state, action: PayloadAction<string>) => {
            state.followUnFollow.userName = action.payload
        },
    },
})

export const paramsReducer = paramsSlice.reducer
export const {SetAllPostsParamsAC, SetFollowUnFollowUserNameAC} = paramsSlice.actions
