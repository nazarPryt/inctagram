import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserResponseType, UserType } from 'redux/types/authTypes'

const initialState: UserType = {
  email: null,
  userId: null,
  userName: undefined,
}

export const userSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    SetUser: (state, action: PayloadAction<UserResponseType>) => {
      state = { ...action.payload }

      return state
    },
  },
})

export const userReducer = userSlice.reducer
export const { SetUser } = userSlice.actions
