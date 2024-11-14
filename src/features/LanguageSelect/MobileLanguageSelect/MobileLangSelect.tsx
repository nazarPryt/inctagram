import flagRus from '@/public/pictures/flagRus.png'
import flagUK from '@/public/pictures/flagUK.png'
import {matchesPathname} from '@/shared/utils/MatchesPathname'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {MobileLanguageSelectStyled} from './MobileLanguageSelect.styled'

export const MobileLangSelect = () => {
    const {asPath, locale} = useRouter()

    return (
        <MobileLanguageSelectStyled>
            <Link className={matchesPathname(locale as string, 'ru') ? 'active' : ''} href={asPath} locale={'ru'}>
                <Image alt={'ru'} height={24} src={flagRus} width={36} />
            </Link>
            <Link className={matchesPathname(locale as string, 'en') ? 'active' : ''} href={asPath} locale={'en'}>
                <Image alt={'ru'} height={24} src={flagUK} width={36} />
            </Link>
        </MobileLanguageSelectStyled>
    )
}
