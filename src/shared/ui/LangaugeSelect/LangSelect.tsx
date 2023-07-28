import {useRouter} from 'next/router'
import React, {useState} from 'react'
import {FlagRussiaIcon} from '../../assets/icons/FlagRussiaIcon'
import {Select} from '../Select'
import FlagEngIcon from '../../assets/icons/FlagUnitedKingdom.svg'

const Country = [
    {
        value: 'ru',
        label: (
            <>
                <FlagRussiaIcon />
                Russian
            </>
        ),
    },
    {
        value: 'en',
        label: (
            <>
                <FlagEngIcon />
                English
            </>
        ),
    },
]

export const LangSelect = () => {
    const {locale, push, pathname, query, asPath, locales, defaultLocale} = useRouter()
    const [value, setValue] = useState(locale)
    const changeLangHandler = (country: string) => {
        setValue(country)
        push({pathname, query}, asPath, {locale: country})
    }

    return (
        <div>
            <Select
                value={value!}
                defaultValue={defaultLocale}
                onChange={value => changeLangHandler(value)}
                options={Country}
                width={'163px'}
            />
        </div>
    )
}
