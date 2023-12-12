import {api} from 'redux/api/api'
import {SetUser} from '_app/store/userSlice'

type authMeDataType = {
    userId: number
    userName: string
    email: string
}

export const meApi = api.injectEndpoints({
    endpoints: build => ({
        me: build.query<authMeDataType, void>({
            query: () => ({
                url: `auth/me`,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const res = await queryFulfilled
                    dispatch(SetUser(res.data))
                } catch (e) {
                    console.log(e)
                }
            },
            providesTags: ['Me'],
        }),
    }),
})
export const {useMeQuery} = meApi
