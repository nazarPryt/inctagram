import Image from 'next/image'

import {CountryType} from '../../api'
import {CountryIconStyled} from './CountryIcon.styled'
/**
 * the reason why i dont use unicode country flag
 *
 * https://answers.microsoft.com/en-us/windows/forum/all/flag-emoji/85b163bc-786a-4918-9042-763ccf4b6c05
 * */

export const CountryIcon = ({country}: {country: CountryType}) => {
    return (
        <CountryIconStyled>
            <Image alt={'icon'} height={10} quality={20} src={country.flag} width={10} />
        </CountryIconStyled>
    )
}
