import {ChangeEvent, useState} from 'react'

import {useDebounce} from '@/shared/hooks/useDebounce'
import {InputText} from '@nazar-pryt/inctagram-ui-kit'

import {SearchUserStyled} from './SearchUser.styled'
import {useSearchUserQuery} from './api/SearchUser.api'
import {SearchUserParamsType} from './helpers/SearchUserParams.schema'
import {SearchUserList} from './ui/SearchUserList'

export const SearchUser = () => {
    const [params, setParams] = useState<SearchUserParamsType>({cursor: 0, pageNumber: 1, pageSize: 12, search: ''})
    const {data, isLoading} = useSearchUserQuery(params)
    const users = data ? data.items ?? [] : []

    const handleSearch = useDebounce(term => {
        // Perform search operation with the debounced term
        console.log('Searching for:', term)
    }, 2000)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget

        setParams({...params, search: value})

        // Debounce the search callback
        handleSearch(value)
    }

    return (
        <SearchUserStyled>
            <form>
                <InputText onChange={handleChange} search value={params.search} />
            </form>
            <SearchUserList isLoading={isLoading} users={users} />
        </SearchUserStyled>
    )
}
