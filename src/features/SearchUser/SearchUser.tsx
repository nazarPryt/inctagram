import {ChangeEvent, useEffect, useState} from 'react'

import {PATH} from '@/_app/AppSettings'
import {useDebounceValue} from '@/shared/hooks/useDebounceValue'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {filterAllParams} from '@/shared/utils/FilterParams/filterParams'
import {InputText} from '@nazar-pryt/inctagram-ui-kit'
import {useSearchParams} from 'next/navigation'
import {useRouter} from 'next/router'

import {SearchUserStyled} from './SearchUser.styled'
import {useSearchUserQuery} from './api/SearchUser.api'
import {SearchUserList} from './ui/SearchUserList'

export const SearchUser = () => {
    const {t} = useTranslation()
    const router = useRouter()
    const searchParams = useSearchParams()
    const pageSizeQuery = searchParams.get('pageSize') ? searchParams.get('pageSize') + '' : '12'
    const pageNumberQuery = searchParams.get('pageNumber') ? searchParams.get('pageNumber') + '' : '1'
    const cursorQuery = searchParams.get('cursor') ? searchParams.get('cursor') + '' : '0'
    const searchQuery = searchParams.get('search') ? searchParams.get('search') : ''

    const [searchValue, setSearchValue] = useState<string>(searchQuery as string)
    const debouncedValue = useDebounceValue<string>(searchValue, 500)

    const [params, setParams] = useState<any>({
        cursor: '0',
        pageNumber: '1',
        pageSize: '12',
        search: debouncedValue,
    })
    const urlParamsFilter = filterAllParams({
        cursor: cursorQuery,
        pageNumber: pageNumberQuery,
        pageSize: pageSizeQuery,
        search: searchQuery as string,
    })

    console.log('params: ', params)

    const {data, isLoading} = useSearchUserQuery(params, {
        refetchOnMountOrArgChange: true,
        skip: !(JSON.stringify(params) === JSON.stringify(urlParamsFilter)),
    })

    const users = data ? data.items ?? [] : null

    const handleClear = () => {
        setSearchValue('')
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget

        setSearchValue(value)

        // handleSearch(value)
    }

    useEffect(() => {
        void router.push(PATH.SEARCH, {
            query: {
                ...filterAllParams({
                    ...params,
                    cursor: cursorQuery,
                    pageNumber: pageNumberQuery,
                    pageSize: pageSizeQuery,
                    search: searchValue,
                }),
            },
        })
    }, [debouncedValue])

    useEffect(() => {
        if (JSON.stringify(params) !== JSON.stringify(urlParamsFilter)) {
            setParams(urlParamsFilter)
        }
    }, [urlParamsFilter])

    // useEffect(() => {
    //     if (JSON.stringify(params) === JSON.stringify(urlParamsFilter)) {
    //         MakeSearchRequest({...params})
    //             .unwrap()
    //             .then(() => {
    //                 console.log('done')
    //             })
    //     }
    // }, [params])

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
