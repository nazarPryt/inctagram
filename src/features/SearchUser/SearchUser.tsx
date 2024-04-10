import {ChangeEvent, useEffect, useState} from 'react'

import {PATH} from '@/_app/AppSettings'
import {useDebounceCallBack} from '@/shared/hooks/useDebounceCallBack'
import {useQueryParams} from '@/shared/hooks/useQueryParams'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {InputText} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

import {SearchUserStyled} from './SearchUser.styled'
import {useLazySearchUserQuery, useSearchUserQuery} from './api/SearchUser.api'
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
        search: null,
    })
    const {data, isLoading} = useSearchUserQuery(params)

    const users = data ? data.items ?? [] : null

    const handleSearch = useDebounceCallBack(term => {
        setParams(prev => {
            return {...prev, search: searchValue}
        })
        void router.push(PATH.SEARCH, {query: {search: term}})
    }, 2000)

    const handleClear = () => {
        setSearchValue('')
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget

        setSearchValue(value)

        handleSearch(value)
    }

    const searchQuery = router.query.search as string

    // console.log('searchQuery: ', searchQuery)
    // useEffect(() => {
    //     const paramsFromURL: SearchUserParamsType = {
    //         ...params,
    //         search: searchQuery && '',
    //     }
    //
    //     console.log('useEffect')
    //     setParams(paramsFromURL)
    //     // searchUser(params)
    // }, [router.query])
    // useEffect(() => {
    //     setSearchValue(searchQuery)
    // }, [searchQuery])

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
