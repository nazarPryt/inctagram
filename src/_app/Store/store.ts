import {countryApi, rtkQuery} from '@/_app/Api/client/RTKQuery'
import {appReducer} from '@/_app/Store/slices/appSlice'
import {messengerReducer} from '@/_app/Store/slices/messengerSlice'
import {paramsReducer} from '@/_app/Store/slices/paramsSlice'
import {userReducer} from '@/_app/Store/slices/userSlice'
import {createPostReducer} from '@/features/Post/CreatePost/model/slice/createPostSlice'
import {editorPanelReducer} from '@/features/Post/CreatePost/model/slice/editorPanelSlice'
import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(rtkQuery.middleware).concat(countryApi.middleware),
    reducer: {
        app: appReducer,
        [countryApi.reducerPath]: countryApi.reducer,
        createPost: createPostReducer,
        editorPanel: editorPanelReducer,
        messengerParams: messengerReducer,
        params: paramsReducer,
        [rtkQuery.reducerPath]: rtkQuery.reducer,
        userAuth: userReducer,
    },
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
