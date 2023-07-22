import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {appReducer} from '_app/store/appSlice'
import {userReducer} from '_app/store/userSlice'
import {api} from 'redux/api/api'

export const store = configureStore({
    reducer: {
        app: appReducer,
        userAuth: userReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
