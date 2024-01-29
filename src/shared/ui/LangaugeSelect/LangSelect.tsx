import {Select} from '@nazar-pryt/inctagram-ui-kit'
import {SelectOptionType} from '@nazar-pryt/inctagram-ui-kit/dist/components/Select/Select'
import {useRouter} from 'next/router'

export const LangSelect = () => {
    const {asPath, locale, locales, pathname, push, query} = useRouter()

    const options: SelectOptionType[] = [
        {label: 'ru', value: 'ru'},
        {label: 'en', value: 'en'},
    ]
    const changeLangHandler = (locale: string) => {
        push({pathname, query}, asPath, {locale})
    }

    return (
        <div>
            <Select onChange={changeLangHandler} options={options} value={locale!} />
        </div>
    )
}
