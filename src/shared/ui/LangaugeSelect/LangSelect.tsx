import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { FlagRussiaIcon } from '../../assets/icons/FlagRussiaIcon'
import FlagEngIcon from '../../assets/icons/FlagUnitedKingdom.svg'

import { CustomSelect } from 'shared/ui/Select'

const Country = [
  {
    value: 'ru',
    label: (
      <>
        <FlagRussiaIcon />
        Русский
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

export const LangSelect = (): JSX.Element => {
  const { push, pathname, query, asPath, defaultLocale } = useRouter()
  const [value, setValue] = useState(defaultLocale)
  const changeLangHandler = (country: string): void => {
    setValue(country)
    push({ pathname, query }, asPath, { locale: country })
    localStorage.setItem('lang', country)
  }

  useEffect(() => {
    const lang = localStorage.getItem('lang')

    if (lang) {
      setValue(lang)
      push({ pathname, query }, asPath, { locale: lang })
    } else {
      push({ pathname, query }, asPath, { locale: defaultLocale })
    }
  }, [])

  return (
    <div>
      <CustomSelect
        defaultValue={defaultLocale}
        options={Country}
        value={value!}
        onChange={value => changeLangHandler(value)}
        // width={'163px'}
      />
    </div>
  )
}
