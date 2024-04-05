import {useState} from 'react'

import {SearchUserStyled} from '@/features/SearchUser/SearchUser.styled'
import {useSearchUserQuery} from '@/features/SearchUser/api/SearchUser.api'
import {SearchUserParamsType} from '@/features/SearchUser/helpers/SearchUserParams.schema'

export const SearchUser = () => {
    const [params, setParams] = useState<SearchUserParamsType>({cursor: 0, pageNumber: 1, pageSize: 12, search: ''})
    const {data, isLoading} = useSearchUserQuery(params)

    console.log(data)

    return <SearchUserStyled>dfdf</SearchUserStyled>
}
