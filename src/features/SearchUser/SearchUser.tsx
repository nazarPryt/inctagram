import {ChangeEvent, useState} from 'react'

import {PATH} from '@/_app/AppSettings'
import {useDebounceCallBack} from '@/shared/hooks/useDebounceCallBack'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {InputText} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

import {SearchUserStyled} from './SearchUser.styled'
import {useSearchUserQuery} from './api/SearchUser.api'
import {SearchUserParamsType} from './helpers/SearchUserParams.schema'
import {SearchUserList} from './ui/SearchUserList'

export const SearchUser = () => {
    const {t} = useTranslation()
    const router = useRouter()
    const [searchValue, setSearchValue] = useState<string>('')
    const [params, setParams] = useState<SearchUserParamsType>({
        cursor: 0,
        pageNumber: 1,
        pageSize: 12,
        search: searchValue,
    })

    const searchQuery = router.query.search as string

    console.log('params: ', params)
    const {data, isLoading} = useSearchUserQuery(params)

    const users = data ? data.items ?? [] : null

    const handleSearch = useDebounceCallBack(term => {
        setParams(prev => {
            return {...prev, search: searchValue}
        })
        void router.push(PATH.SEARCH, {query: {search: term}})
    }, 1500)

    const handleClear = () => {
        setSearchValue('')
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget

        setSearchValue(value)

        handleSearch(value)
    }

    return (
        <SearchUserStyled>
            <h2>{t.aside.search}</h2>
            <form>
                <InputText onChange={handleChange} onClearClick={handleClear} search value={searchValue} />
            </form>
            <SearchUserList isLoading={isLoading} users={users} />
        </SearchUserStyled>
    )
}
