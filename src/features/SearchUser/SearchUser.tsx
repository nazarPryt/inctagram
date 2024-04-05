import {useMemo, useState} from 'react'

import {SearchUserStyled} from '@/features/SearchUser/SearchUser.styled'
import {useSearchUserQuery} from '@/features/SearchUser/api/SearchUser.api'
import {SearchUserParamsType} from '@/features/SearchUser/helpers/SearchUserParams.schema'
import {SearchUserList} from '@/features/SearchUser/ui/SearchUserList'
import {InputText} from '@nazar-pryt/inctagram-ui-kit'

export const SearchUser = () => {
    const [params, setParams] = useState<SearchUserParamsType>({cursor: 0, pageNumber: 1, pageSize: 12, search: ''})
    const {data, isLoading} = useSearchUserQuery(params)
    const users = data ? data.items ?? [] : []

    console.log(users)

    return (
        <SearchUserStyled>
            <form>
                <InputText search />
            </form>
            <div>
                <SearchUserList users={users} />
            </div>
        </SearchUserStyled>
    )
}
