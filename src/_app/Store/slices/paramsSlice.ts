import {AllPostsParamsType, GetUserPostsParamsType} from '@/_app/Store/slicesTypes/paramsSliceType'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

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
    userPosts: {
        endCursorPostId: null,
        userId: null,
    } as GetUserPostsParamsType,
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
