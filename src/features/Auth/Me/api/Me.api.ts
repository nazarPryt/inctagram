import {SetUser} from '@/_app/store/userSlice'
import {api} from '@/redux/api/api'

type authMeDataType = {
    email: string
    userId: number
    userName: string
}

export const meApi = api.injectEndpoints({
    endpoints: build => ({
        me: build.query<authMeDataType, void>({
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const res = await queryFulfilled

                    dispatch(SetUser(res.data))
                } catch (e) {
                    console.log(e)
                }
            },
            providesTags: ['Me'],
            query: () => ({
                url: `auth/me`,
            }),
        }),
    }),
})
export const {useMeQuery} = meApi
