import {Select, SelectOptionType} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'
import {useRouter} from 'next/router'

import flagRus from '../../../../public/pictures/flagRus.png'
import flagUK from '../../../../public/pictures/flagUK.png'

export const LangSelect = () => {
    const {asPath, locale, locales, pathname, push, query} = useRouter()

    const options: SelectOptionType[] = [
        {icon: <Image alt={'flagRus'} height={36} src={flagRus} width={36} />, label: 'Russian', value: 'ru'},
        {icon: <Image alt={'flagUK'} height={36} src={flagUK} width={36} />, label: 'English', value: 'en'},
    ]
    const changeLangHandler = (locale: string) => {
        push({pathname, query}, asPath, {locale})
    }

    return <Select onChange={changeLangHandler} options={options} value={locale!} width={150} />
}
