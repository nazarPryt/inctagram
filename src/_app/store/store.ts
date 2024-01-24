import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {appReducer} from '_app/store/appSlice'
import {userReducer} from '_app/store/userSlice'
import {createPostReducer} from 'features/CreatePost/model/slice/createPostSlice'
import {editorPanelReducer} from 'features/CreatePost/model/slice/editorPanelSlice'
import {api} from 'redux/api/api'

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
    reducer: {
        [api.reducerPath]: api.reducer,
        app: appReducer,
        createPost: createPostReducer,
        editorPanel: editorPanelReducer,
        userAuth: userReducer,
    },
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
