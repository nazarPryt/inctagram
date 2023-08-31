import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GenerateId } from 'shared/utils/generateID'

export type ThemeAppType = 'dark' | 'light'
export type TabsSettingsType = 'accountManagement' | 'devices' | 'generalInformation' | 'myPayments'

export type NotificationType = {
  message: string
  type: 'error' | 'success'
  id: string
}
const initialState = {
  profileSettingsTabs: 'generalInformation' as TabsSettingsType,
  theme: 'dark' as ThemeAppType,
  notifications: [] as NotificationType[],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setThemeAppAC: (state, action: PayloadAction<{ theme: ThemeAppType }>) => {
      state.theme = action.payload.theme
    },
    SetAppNotificationAC: (state, action: PayloadAction<{ notifications: Omit<NotificationType, 'id'> }>) => {
      const id = GenerateId()

      state.notifications.push({ ...action.payload.notifications, id })
    },
    RemoveAppNotificationAC: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.notifications.findIndex(index => index.id === action.payload.id)

      if (index > -1) {
        state.notifications.splice(index, 1)
      }
    },
    setProfileSettingsTabsAC: (state, action: PayloadAction<{ tab: TabsSettingsType }>) => {
      state.profileSettingsTabs = action.payload.tab
    },
  },
})

export const appReducer = appSlice.reducer
export const { setThemeAppAC, RemoveAppNotificationAC, SetAppNotificationAC, setProfileSettingsTabsAC } =
  appSlice.actions
