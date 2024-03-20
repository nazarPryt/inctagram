import {rtkQuery} from '@/_app/Api/client/rtkQuery'
import {SetUser} from '@/_app/Store/slices/userSlice'

import {MeDataType} from './me.types'

export const meApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        me: build.query<MeDataType, void>({
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
