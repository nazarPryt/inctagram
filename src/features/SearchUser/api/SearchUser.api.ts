import {rtkQuery} from '@/_app/Api/client/rtkQuery'

import {SearchUserParamsType} from '../helpers/SearchUserParams.schema'
import {SearchUserResponseSchema, SearchUserResponseType} from '../helpers/SearchUserResponse.schema'

export const searchUserAPI = rtkQuery.injectEndpoints({
    endpoints: build => ({
        searchUser: build.query<SearchUserResponseType, SearchUserParamsType>({
            providesTags: ['SearchUser'],
            query: params => ({
                method: 'GET',
                params,
                url: 'users',
            }),
            transformResponse: response => {
                return SearchUserResponseSchema.parse(response)
            },
        }),
    }),
    overrideExisting: true,
})

export const {useSearchUserQuery} = searchUserAPI
