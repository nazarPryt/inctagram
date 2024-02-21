import {createPostReducer} from '@/features/Post/CreatePost/model/slice/createPostSlice'
import {editorPanelReducer} from '@/features/Post/CreatePost/model/slice/editorPanelSlice'
import {api} from '@/redux/api/api'
import {appReducer} from '@/shared/store/appSlice'
import {userReducer} from '@/shared/store/userSlice'
import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

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
