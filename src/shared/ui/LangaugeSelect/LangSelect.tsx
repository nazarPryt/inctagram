import React, {useEffect, useState} from 'react'

import {Select} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

const Country = [
    {
        label: 'Русский',
        value: 'ru',
    },
    {
        label: 'English',
        value: 'en',
    },
]

export const LangSelect = () => {
    const {asPath, defaultLocale, pathname, push, query} = useRouter()
    const [value, setValue] = useState(defaultLocale)
    const changeLangHandler = (country: string) => {
        setValue(country)
        push({pathname, query}, asPath, {locale: country})
        localStorage.setItem('lang', country)
    }

    useEffect(() => {
        const lang = localStorage.getItem('lang')

        if (lang) {
            setValue(lang)
            push({pathname, query}, asPath, {locale: lang})
        } else {
            push({pathname, query}, asPath, {locale: defaultLocale})
        }
    }, [])

    return (
        <div>
            <Select
                onChange={(value: any) => changeLangHandler(value)}
                options={Country}
                value={value!}
                // width={'163px'}
            />
        </div>
    )
}
