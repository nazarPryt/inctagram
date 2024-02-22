import {GenerateID} from '@/shared/utils/GenerateId'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export type ThemeAppType = 'dark' | 'light'

export type NotificationType = {
    id: string
    message: string
    type: 'error' | 'success'
}
const initialState = {
    notifications: [] as NotificationType[],
    theme: 'dark' as ThemeAppType,
}

export const appSlice = createSlice({
    initialState,
    name: 'app',
    reducers: {
        RemoveAppNotificationAC: (state, action: PayloadAction<{id: string}>) => {
            const index = state.notifications.findIndex(index => index.id === action.payload.id)

            if (index > -1) {
                state.notifications.splice(index, 1)
            }
        },
        SetAppNotificationAC: (state, action: PayloadAction<{notifications: Omit<NotificationType, 'id'>}>) => {
            const id = GenerateID()

            state.notifications.push({...action.payload.notifications, id})
        },
        setThemeAppAC: (state, action: PayloadAction<{theme: ThemeAppType}>) => {
            state.theme = action.payload.theme
        },
    },
})

export const appReducer = appSlice.reducer
export const {RemoveAppNotificationAC, SetAppNotificationAC, setThemeAppAC} = appSlice.actions
